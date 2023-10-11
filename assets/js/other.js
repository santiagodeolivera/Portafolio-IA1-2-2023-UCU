function log(value, msg) {
    console.log(msg, ":", value);
    return value;
}

/*
interface Template {
    tag: string,
    classes?: string[],
    children?: (Template | string)[],
    style?: [string, string][],
    attrs?: [string, string][]
};

args: Template
*/
function newElement(args) {
    const res = document.createElement(args.tag);

    if (args.classes != undefined) {
        res.classList.add(...args.classes);
    }

    if (args.style != undefined) {
        for (let [name, value] of args.style) {
            res.style[name] = value;
        }
    }

    if (args.attrs != undefined) {
        for (let [name, value] of args.attrs) {
            res.setAttribute(name, value);
        }
    }

    if (args.children != undefined) {
        for (let temp of args.children) {
            const child = typeof temp === "string" ? temp : newElement(temp);
            res.append(child);
        }
    }

    return res;
}

function attributeDescriptionList(elem, data) {
    for (let attr of data) {
        elem.appendChild(
            newElement({
                tag: "li",
                children: [
                    {
                        tag: "span",
                        style: [
                            ["fontWeight", "bold"],
                            ...(attr.objective ? [["textDecoration", "underline"]] : [])
                        ],
                        children: [attr.name]
                    }, ": ", attr.desc
                ]
            })
        );
    }
}

