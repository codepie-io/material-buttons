# MATERIAL BUTTONS
## Introduction
Buttons are primarily used to perform certain actions such as create, edit, delete, 
view and many other things to a piece of information in a web page as per requirement.

**Material Buttons** makes the usage of buttons for web-designing much easier, as it readily provides a wide variety of pre-designed buttons to you.
 The **material buttons** are created following [Material design guidelines](https://material.io/guidelines/components/buttons.html#) and the 
  classes are named following the naming convention of [BEM methodology](https://en.bem.info/methodology/naming-convention/).
 
 The following are the different variety of buttons  and there demo described elaborately:
  
   
      
   
## 1. Flat Button 
Flat buttons are plain rectangular shaped button.

 1.**Default Flat Button**
       
   The default button is the basic st ructure of a button. The default button class has to be 
    used always to create any other type of button.
         
   To include default button in your website use the class:
         
         
     
  ```
  <button class="md-button" title="Default">Default</button>
  ```
    
 2. **Primary Flat Button** 
  
    To display a primary button use the code below:
    ```
    <button class="md-button md-button--primary" title="Primary Button">Primary</button>
    ```
 3. **Accent Flat Button**
 
    To display a accent button use the code below:
    ```
     <button class="md-button md-button--accent" title="Accent Button">Accent</button>
    ```
 4. **Compact Flat Button**
 
    To display a compact button use the code below:
    ```
     <button class="md-button md-button--compact" title="Compact Button">Compact</button>
    ```
 5. **Dense Default Flat Button**
 
       To display a dense default button use the code below:
       ```
         <button class="md-button md-button--dense" title="Dense Default Button">Dense Default</button>
       ```
 6. **Large Default Flat Button**
 
       To display a large default button use the code below:
       ```
          <button class="md-button md-button--large" title="Large Default Button">Large Default</button>
       ```
 7. **Flat Button with Icon**
 
       To display a button with icon use the code below:
       ```
        <button class="md-button md-button--has-icon" title="Button with Icon"><i class="material-icons">star</i> with icon</button>
       ```
 8. **Flat Button with Icon Right**
        
       To display a button with icon right use the code below:
       ```
       <button class="md-button md-button--has-icon is-right-align" title="Button with Icon Right"><i class="material-icons">menu</i> with icon</button>
       ```
 9. **Disabled Flat Button**

       To display a disabled button use the code below:
       ```
       <button class="md-button md-button--accent" title="Disabled Button" disabled="">Disabled</button>
       ```
   
## 2. Flat Coloured Button
  Flat Coloured buttons as the name suggest are flat coloured rectangular shaped buttons.
  
  1. **Default Flat Coloured Button**
     
        To display a flat default button use the code below:
        ```
         <button class="md-button md-button--flat" title="Default">Default</button>
        ```
  2. **Primary Flat Coloured Button** 
    
      To display a coloured primary button use the code below:
      
      **Note:** 'md-button--raised' should be used to get the flat coloured primary button effect. 
      ```
      <button class="md-button md-button--primary md-button--raised md-button--flat" title="Primary Button">Primary</button>
      ```
   3. **Accent Flat Coloured Button**
   
      To display a coloured accent button use the code below:
      
      **Note:** 'md-button--raised' should be used to get the flat coloured accent button effect. 
      
      ```
      <button class="md-button md-button--flat md-button--raised md-button--accent" title="Accent Button">Accent</button>
      ```
      
## 3. Raised Button
        
   Raised buttons give a raised effect to the flat button.
   1. **Default Raised Button**
   
   To display a default raised button use the code below:
    

    <button class="md-button md-button--raised" title="Default">Default</button>  
    
   2.**Primary Raised Button**
   
   To display a primary raised button use the code below:

    <button class="md-button md-button--raised md-button--primary" title="Primary Button">Primary</button>
   3.**Accent Raised Button**
   
   To display a accent raised button use the code below:
    
    
         <button class="md-button md-button--raised md-button--accent" title="Accent Button">Accent</button>
   4.**Raised Button with Icon**
   
   To display a raised button with icon use the code below:
    
    
    <button class="md-button md-button--raised md-button--has-icon" title="Button with Icon"><i
                        class="material-icons">star</i> with icon
                </button>
   5.**Button with Icon Right**
   
   To display a raised button with icon right use the code below:
    
    
    <button class="md-button md-button--raised md-button--has-icon is-right-align"
                            title="Button with Icon Right"><i class="material-icons">menu</i> with
                        icon
                    </button>
   6.**Disabled Button**
   
   To display a raised disabled button use the code below:
    
    
    <button class="md-button md-button--raised md-button--accent" title="Disabled Button" disabled="">
                        Disabled
                    </button>
 
## 4. Icon Button

   The buttons is represented in the form of icon.
   1. **Default Icon Button**
   
   To display a icon default button use the code below:
    

    <button class="md-button md-button--icon" title="Default"><i class="material-icons">star</i></button>
    
   2.**Primary Icon Button**
   
   To display a icon primary button use the code below:

     <button class="md-button md-button--primary md-button--icon" title="Primary Button"><i
                        class="material-icons">star</i></button> 
   3.**Accent Icon Button**
   
   To display a icon accent button use the code below:
    
    
    <button class="md-button md-button--accent md-button--icon" title="Accent Button">
                    <i class="material-icons">star</i>
                </button>
## 5. Outline Button

   These type of buttons has an outline border.
   
   1. **Default Outline Button**
   
   To display a outline default button use the code below:
    

    <button class="md-button md-button--icon" title="Default"><i class="material-icons">star</i></button>
    
   2.**Primary Outline Button**
   
   To display a outline primary button use the code below:

     <button class="md-button md-button--primary md-button--icon" title="Primary Button"><i
                        class="material-icons">star</i></button> 
   3.**Accent Outline Button**
   
   To display a icon accent button use the code below:
    
    
    <button class="md-button md-button--accent md-button--icon" title="Accent Button">
                    <i class="material-icons">star</i>
                </button>

## 6. Fab Button
    
   Fab Button is a circular button that floats at the bottom right of the page.
   The Fab button is placed at the highest z-index level. 
   
   1. **Default Fab Button**
   
   To display a default fab button use the code below:
    

    <button class="md-button md-button--raised md-button--fab" title="Default">
                    <i class="material-icons">phone</i>
                </button>    
   2.**Primary Fab Button**
   
   To display a primary fab button use the code below:

     <button class="md-button md-button--primary md-button--fab md-button--raised" title="Primary Button">
                         <i class="material-icons">phone</i>
                     </button>

   3.**Accent Fab Button**
   
   To display a accent fab button use the code below:
    
    
    <button class="md-button md-button--accent md-button--fab md-button--raised" title="Accent Button">
                        <i class="material-icons">phone</i>
                    </button>                
   4.**Disabled Fab Button**
       
   To display a disabled fab button use the code below:
        
        
        <button class="md-button md-button--raised md-button--fab" title="Disabled Button" disabled>
                            <i class="material-icons">phone</i>
                        </button>
## 7. Mini Fab Button
    
   Mini fab button is the smaller size of the **Fab Button** 
   
   1. **Default Mini Fab Button**
   
   To display a default mini fab button use the code below:
    

    <button class="md-button md-button--raised md-button--fab md-button--mini-fab" title="Default">
                        <i class="material-icons">phone</i>
                    </button>
   2.**Primary Mini Fab Button**
   
   To display a primary mini fab button use the code below:

     <button class="md-button md-button--primary md-button--fab md-button--mini-fab md-button--raised"
                             title="Primary Button">
                         <i class="material-icons">phone</i>
                     </button>

   3.**Accent Mini Fab Button**
   
   To display a accent mini fab button use the code below:
    
    
    <button class="md-button md-button--accent md-button--fab md-button--mini-fab md-button--raised"
                            title="Accent Button">
                        <i class="material-icons">phone</i>
                    </button>                
   4.**Disabled Mini Fab Button**
       
   To display a disabled mini fab button use the code below:
        
        
       <button class="md-button md-button--raised md-button--fab md-button--mini-fab" title="Disabled Button"
                               disabled>
                           <i class="material-icons">phone</i>
                       </button>
                       
## 8. Group Button
    
Group button is used to group a series of buttons together (on a single line) in a button group:
   
   1. **Group Button with Icon**
   
   To display a group button with icon use the code below:
    

    <div class="md-group-button is-option-selected">
         <button class="md-group-button__item md-button"><i class="material-icons">format_align_left</i>
         </button>
            <button class="md-group-button__item md-button is-selected">
            <i class="material-icons">format_align_center</i>
            </button>
              <button class="md-group-button__item md-button">
              <i class="material-icons">format_align_right</i>
              </button>
    </div>

   2.**Group Button with Text**
   
   To display a group button with text use the code below:

     <div class="md-group-button is-option-selected">
                         <button class="md-group-button__item md-button">Left</button>
                         <button class="md-group-button__item md-button is-selected">
                             Center
                         </button>
                         <button class="md-group-button__item md-button">
                             Right
                         </button>
                     </div>
## 9. Block Button
    
Block button is used to group a series of buttons together to form a vertical block (one after another) in a button group:
   
   1. **Block Button**
   
   To display a block of button use the code below:
    

    <div class="md-grid-tile md-grid-tile--4-col-md md-grid-tile--2-col-xs" style="padding: 24px">
                    <button class="md-button md-button--block" style="margin-bottom: 0">Block Button</button>
                    <button class="md-button md-button--block md-button--primary" style="margin-bottom: 0">Block Button
                    </button>
                    <button class="md-button md-button--block md-button--accent" style="margin-bottom: 0">Block Button
                    </button>
                    <button class="md-button md-button--block md-button--raised" style="margin-bottom: 0">Block Button
                    </button>
                </div>
                     
                         

## Demo
 <a href="https://codeartisan-ui.github.io/material-buttons/" target="_blank">material-buttons</a>