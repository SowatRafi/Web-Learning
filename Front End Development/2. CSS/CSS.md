### CSS Ruleset

    Selector
        ⬇
        p {
            color: green;
            ⬆___⬆  ⬆____⬆
          Property: Value
        }
        ⬆________________⬆
            Declaration
****
### Three ways to apply CSS

|**External**|**Internal**|**Inline**|
|--------|--------|------|
|`<link herf="styles.css" rel="stylesheet" type="text/css">`|`<style>...</style>`|`<h1 style="color: green">...</h1>`|
****
#### Some basic Selectors
|**Selector Name**|**What is selects**|**Example**|
|-------------|---------------|-------|
|Element selector|HTML element specified.|`p{color: white;}`|
|ID selector|Element on page with specified ID only one element per ID on Page.|`#heading{font-family: san serif;}`|
|Class selector|Element on page with specified class. Multiple class instances allowed.|`.par{text-align: left;}`|
|Grouping selector|Multiple elements.|`p, h4 {font-size: 8px;}`|
|*|All elements.|`*{background-color: green;}`|
****

### CSS Box Model

* _CSS_ _box_ **model** is a box that wraps around every _HTML_ element.
* The _box_ **model** in _CSS_ refers to design and layout.

#### Components of CSS Box Model:

|**Margin**|
|------|
|This is the space around the outside of the element.|

|**Border**|
|------|
|This is the solid line that sits outside the padding.|

|**Padding**|
|------|
|Padding is used to create space around an element's content, inside of any defined borders.|

|**Content**|
|------|
|This is where the text, images and other content appear.|
****

### CSS Margin and Padding Property

_CSS_ `margin`|`padding` properties are used to create space around elements.
* Each `margin`|`padding` has 4 sides:
    1. `margin-top` |`padding-top`
    2. `margin-right` |`padding-right`
    3. `margin-left` |`padding-left`
    4. `margin-bottom` |`padding-bottom`
    
_Margin_|_Padding_ can be specified using 1, 2, 3 or 4 values.

|**Values Specified**|**How it applied**|
|----------------|--------------|
|**1**|Applies to all **4** sides.|
|**2**|First **margin** or **padding** applies to `top` & `bottom`, second applies to `left` & `right`|
|**3**|First **margin** or **padding** applies to `top`, second to `left` & `right`, third to `bottom`|
|**4**|**Margin** or **Padding** apply this order: `top`, `right`, `left` & `bottom`.|


* Each value is a _length_, a _percentage_, _inherit_ or keyword _auto_.
    * **Length**: This is the size of the _margin_ as a fixed value.
    * **Percentage**: This is size of _margin_ as a **percentage** relative to the width of the containing block.
    * **Inherit**: Specifies that the _margin_ **inherits** from parent _element_.
    * **auto**: The browser selects a suitable _margin_ to use.
    
    Each value can be **positive**, **zero** or **negative**.
  
_CSS_ `padding` is also similar with this `margin` property.

Only difference is it can't use `auto` & **negative** value.
****

### CSS Border Property
* Allows you to define a `border` for an element by specifying the: `style`, `width` & `color`.
* `Border-style` property: Specifies what kind of `border` to display.

Example _styles_:
  1. Dotted: `............`
  2. Dashes: `------------`
  3. Solid: `______________`

* `Border-width`: Specifies width of **4** _borders_.
* `Border-color`: Sets the color of **4** _borders_.
****

### CSS Display Property

* The _display_ property specifies how an _element_ is displayed.
* The _display_ property can be used to control **layout**.
* Every `HTML` element has a **default** _display_ value depending on what type of element it is.
* The **default** _display_ for most element is **block** or **inline**.

#### Block Level Elements

* All **block** level elements always start on a new line and occupies the full width value.
Examples of **block** level elements are:
  * `<div>`
  * `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>`
  * `<p>`
  
#### Inline Level Elements

* An **inline** element does not start on a new line and only occupies width required.
Examples of **inline** elements are:
  * `<a>`
  * `<img>`
  
****

### CSS font Property

Defines the `font family`, `boldness`, `size` & `style` of a **text**.
  * The `font-family` property is used to set the type of font to be used.
  * The `font-style` property is mainly used to make text **italic**.
  * The `font-size` property is used to set the size of the **text**.
  * The `font-weight` property is used the specify the **weight** or **boldness** of a **text**.

[Google Fronts][Google Fronts]

[Google Fronts]: https://fonts.google.com