import React, { useEffect } from 'react';
import './Dropdown.scss';
import Icon from '../../atoms/Icon/Icon';
import Button from '../../atoms/Button/Button';
import { useTranslation } from 'react-i18next';
const Dropdown = ({list, headerTitle, selectedCategory, itemClickHandler, displayProp}) =>{
    const [isListOpen, setIsListOpen] = React.useState(false);
    const [headerTit, setHeaderTit] = React.useState(headerTitle);
    const {t} = useTranslation();

    //To observe selected category change and update headertitle accordingly
    useEffect(() =>{ 
      list.find(item => item.id == selectedCategory && setHeaderTit(item.name)) 
    },[selectedCategory]);

    //To handle chnage of category
    const handleItemClick = (id, name) =>{
        setHeaderTit(name);
        setIsListOpen(isListOpen => !isListOpen);
        itemClickHandler(id, name);
    };
    return(
    <div className="dropdown">
        <Button type="primary"  reqClass={`dropdown-header`}  buttonclickhandler={() => setIsListOpen(isListOpen => !isListOpen)}>
            <h2 className="dropdown-header-title">{t(headerTit)}</h2>
            {isListOpen ? <Icon source="../../../assets/images/up-arrow.png" reqclass={`dropdowniconfit`}/> : <Icon source="../../../assets/images/down-arrow.png" reqclass={`dropdowniconfit`}/>}
        </Button>   
        {isListOpen && (
        <ol className="dropdown-list">
          {list.map(item => {
            if(item.order > 0) return <Button key={item.id} id={item.id} name={item[displayProp]} role="listitem"
            reqClass={`dropdown-list-item ${selectedCategory == item.id ? "selected" : ""}`} 
            buttonclickhandler={() => handleItemClick(item.id, item.name)}>
              {item[displayProp]}
              </Button>}
          )}
        </ol>
        )}

    </div>
    )
};
export default Dropdown;