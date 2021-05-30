import React from 'react';
import Button from '../../atoms/Button/Button';
import Icon from '../../atoms/Icon/Icon';
import {useTranslation} from 'react-i18next';
import '../../../assets/images/upward.png'
import './Dropdown.scss';
const Dropdown = ({list, headerTitle, selected, selectedCategory, itemClickHandler, displayProp}) =>{
    const [isListOpen, setIsListOpen] = React.useState(false);
    const [headerTit, setHeaderTit] = React.useState(headerTitle);
    const {t} = useTranslation();
    const handleItemClick = (e) =>{
        setHeaderTit(e.target.name);
        itemClickHandler(e);
        setIsListOpen(isListOpen => !isListOpen);
    }
    return(
    <div className="dropdown">
        <Button type="primary"  reqClass={`dropdown-header`}  buttonclickhandler={() => setIsListOpen(isListOpen => !isListOpen)}>
            <h2 className="dropdown-header-title">{t(headerTit)}</h2>
            {isListOpen ? <Icon source="../../../assets/images/upwardicon.png" reqclass={`dropdowniconfit`}/> : <Icon source="../../../assets/images/downwardicon.png" reqclass={`dropdowniconfit`}/>}
        </Button>   
        {isListOpen && (
        <div  role="list"  className="dropdown-list">
          {list.map(item => {
            if(item.order > 0) return <button type="button" id={item.id} name={item[displayProp]} className={`dropdown-list-item ${selectedCategory == item.id ? "selected" : ""}`}
              key={item.id}
              onClick={handleItemClick} >
              {item[displayProp]}
            </button>
          }
          )}
          </div>
      )}

    </div>
    )
};
export default Dropdown;