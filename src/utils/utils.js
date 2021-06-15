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

export const getElement = (ele, str, ind) =>{
    let allEle = ele.querySelectorAll(str);
    return allEle[typeof ind == 'string' ? allEle.length - parseInt(ind.split('-')[1]) : ind ];
}

export const focusElement = (ele, str, ind) =>{
    return ele.querySelectorAll(str)[ind].focus();
}

export const getFocusables = () => `button, a[href], input, select, textarea`