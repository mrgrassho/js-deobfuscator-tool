#!/usr/bin/env python3
import argparse
from os.path import exists, basename
import re
import json

class bcolors:
   OKBLUE = '\033[94m'
   OKGREEN = '\033[92m'
   FAIL = '\033[91m'
   ENDC = '\033[0m'


def extract_symbols(lines):
    function = re.match(r'^var (.*) = \[', '\n'.join(lines)).group(1)
    symbols = []
    for line in lines[1:]:
        if ']' in line:
            break
        else:
            exp = re.match(r'\s[\"\'](.+)[\"\'][,\n]', line)
            symbol = exp.group(1) if exp else '\'\''
            symbols.append(symbol)
    return {'function': function, 'symbols': symbols}

def generate_strings(function, symbols):
	out = []
	for i, e in enumerate(symbols):
		if (re.match(r"^[0-9]{1}", e) or len(e) > 30 or e.find(" ") > -1):
			out.append({'rep': f"{function}[{i}]", 'exp': e, 'type': 'brac'})
		else:
			out.append({'rep': f"{function}[{i}]", 'exp': e, 'type':'func'})
	return out

def deofuscate(file, symbols):
    if (not exists(file)):
        print(f"[!] File not found - {file}")
        return
    extra_symbols = []
    if symbols:
        if (not exists(symbols)):
            print(f"[!] File not found - {symbols}")
            return
        extra_symbols = json.load(open(symbols, 'r'))
    out = open(f"OUT-{basename(file)}", "w")
    f = open(file, "r") 
    in_lines = f.readlines()
    kwargs = extract_symbols(in_lines)
    strings = generate_strings(**kwargs)
    strings += extra_symbols
    json.dump(strings, open('all_symbols.json', 'w'), indent=2)
    out_lines = in_lines.copy()
    for i, line in enumerate(out_lines):
        flag = False
        for node in strings:
            rep, exp, type = node.values() 
            if (type == "func"):
                line_aux = out_lines[i].replace("["+rep+"]", f".{exp}")
                line_aux = line_aux.replace(rep, exp)
            elif (type == "brac"):
                line_aux = out_lines[i].replace("this."+rep, f"this['{exp}']")
                line_aux = line_aux.replace(rep, f"'{exp}'")
            elif (type == "var"):
                line_aux = out_lines[i].replace(rep, exp)
            if (line_aux != out_lines[i]):
                flag = True
                print(bcolors.FAIL + "-" + line.replace("\n", '') + bcolors.ENDC)
                print(bcolors.OKGREEN + "+" + line_aux.replace("\n", '') + bcolors.ENDC)
                out_lines[i] = line_aux
        if not flag:
            print(bcolors.OKBLUE + " " + line.replace("\n", '') + bcolors.ENDC)
    out.writelines(out_lines)
    out.close()

def main():
    parser = argparse.ArgumentParser(formatter_class=argparse.ArgumentDefaultsHelpFormatter)
    parser.add_argument('file', type=str, help="Specify your Ofuscated JS file")
    parser.add_argument('-e', '--extra-symbols', type=str, help="Specify your symbols file. It must be a JSON file with the following structure [ (str_to_replace, replacement_str, type)], type must be 'var', 'func' or 'brac'.")
    args = parser.parse_args()
    deofuscate(args.file, args.extra_symbols)


if __name__ == "__main__":
    main()