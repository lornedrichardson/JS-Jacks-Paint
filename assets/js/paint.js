function configureListeners() {
    let images = document.querySelectorAll('img') ;

    for (let i = 0; i < images.length; i++) {
        document.getElementById(images[i].id).addEventListener('mouseover', addOpacity);
        document.getElementById(images[i].id).addEventListener('mouseout', removeOpacity);
    }
}

function addOpacity(event) {
    this.classList.add('dim');
    getProductInfo(event.target.id);
}

function removeOpacity(event) {
    this.classList.remove('dim');
    document.getElementById('color-price').textContent = '';
    document.getElementById('color-name').textContent = '';

    event.preventDefault();    
}

function getProductInfo(paintColor) {
    let price;
    let colorName;  
    
    switch (paintColor) {
        case 'pn1':           
            price = '$14.99';
            colorName = 'Lime Green';
            break;           
        case 'pn2':
            price = '$11.14';
            colorName = 'Medium Brown';
            break;            
        case 'pn3':
            price = '$22.99';
            colorName = 'Royal Blue';
            break;   
        case 'pn4':
            price = '$13.42';
            colorName = 'Solid Red';
            break;   
        case 'pn5':
            price = '$21.98';
            colorName = 'Solid White';
            break;   
        case 'pn6':
            price = '$4.99';
            colorName = 'Solid Black';
            break;   
        case 'pn7':
            price = '$8.22';
            colorName = 'Solid Cyan';
            break;   
        case 'pn8':
            price = '$11.99';
            colorName = 'Solid Purple';
            break;   
        case 'pn9':
            price = '$14.99';
            colorName = 'Solid Yellow';
            break;   
        default:              
    }
    updatePrice(colorName, price);

    function updatePrice(colorName, price) {       
        document.getElementById('color-name').textContent = colorName;
        document.getElementById('color-price').textContent = price;
    }
}