import glob
from os import remove as deleteFile, path

def AllFiles(basePath = "**"):
    return [f for f in glob.glob(basePath + "\\*.*", recursive=True)]

def GetFileName(f):
    return path.splitext(path.basename(path.normpath(f)))[0]

# remove current index file
try:
    deleteFile(path.join(path.abspath(path.dirname(__file__)), "index.jsx"))
except FileNotFoundError:
    pass

Files = []

for f in AllFiles():
    if "generate-index.py" in f:
        continue
    else:
        Files += [f]

output = "//#region Imports\n"
imports = {
    "words": [],
}

for file in Files:
    output += 'import ' + GetFileName(file) + ' from "./' + file.replace("\\", "/") + '"\n'
    imports.update(words = imports["words"] + [GetFileName(file)])

output += "//#endregion\n"
output += "\n\n"
output += "//#region Exports\n"

output += f'export const Words = {{{ ", ".join(imports["words"]) }}}\n'

output += "//#endregion\n"



with open("index.jsx", "w") as f:
    f.write(output)