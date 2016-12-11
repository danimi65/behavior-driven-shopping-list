class ShoppingListItem {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.is_done = false;
  }

  check(){
    return this.is_done = true;

 
  }

  uncheck(){
   return  is_done = false;

  }

  render(){
    var renderHtml = '<ul>\
      <li class = "completed_[is_done]">\
      <span> Ice Cream</span> \
      <span>Will melt if not consumed quickly.</span> \
      </li> \
      </ul>';

      return renderHtml;

  }
}


