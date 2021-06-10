export const updateTitle = (title) =>{
    document.title = document.title.split("-")[0] + ` - ${title}`;
}

export const sortByCategory = (array, category) =>{
    return array.sort((a, b) => a[category] - b[category]);
}

export const isNotUndefined = (val) =>{
    return val != undefined && val != null;
}

export const remSpaces = (str) =>{
    return str.split(" ").join("");
}