export const updateTitle = (title) =>{
    document.title = document.title.split("-")[0] + ` - ${title}`;
}