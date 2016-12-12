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
   return  this.is_done = false;

  }

  render(){
    var renderHtml =
    '<li class = \"completed-false>\"><span class = \"listItemName\">' + this.name + '</span><span class = \"listItemDescription\">' + this.description +'</span></li>';
    return renderHtml;
  }
}