function changeProductList(type, element) {
    let tabs = document.getElementsByClassName('name-item');
    for (i = 0; i < tabs.length; i++) {
        tabs[i].style.background = 'none';
    }
    element.style.background = 'white';
    // element.style.width = 'fit-content';
    // element.style.padding = "5px 5px 5px 5px";

    document.getElementById(type).style.display = 'block';

    switch (type) {
        case 'adidas':
            document.getElementById('nike').style.display = 'none';
            document.getElementById('mlb').style.display = 'none';
            document.getElementById('gucci').style.display = 'none';
            document.getElementById('puma').style.display = 'none';
            document.getElementById('vans').style.display = 'none';
            document.getElementById('converse').style.display = 'none';
            break;

        case 'nike':
            document.getElementById('adidas').style.display = 'none';
            document.getElementById('mlb').style.display = 'none';
            document.getElementById('gucci').style.display = 'none';
            document.getElementById('puma').style.display = 'none';
            document.getElementById('vans').style.display = 'none';
            document.getElementById('converse').style.display = 'none';
            break;

        case 'mlb':
            document.getElementById('adidas').style.display = 'none';
            document.getElementById('nike').style.display = 'none';
            document.getElementById('gucci').style.display = 'none';
            document.getElementById('puma').style.display = 'none';
            document.getElementById('vans').style.display = 'none';
            document.getElementById('converse').style.display = 'none';
            break;

        case 'gucci':
            document.getElementById('adidas').style.display = 'none';
            document.getElementById('mlb').style.display = 'none';
            document.getElementById('nike').style.display = 'none';
            document.getElementById('puma').style.display = 'none';
            document.getElementById('vans').style.display = 'none';
            document.getElementById('converse').style.display = 'none';
            break;

        case 'puma':
            document.getElementById('adidas').style.display = 'none';
            document.getElementById('mlb').style.display = 'none';
            document.getElementById('gucci').style.display = 'none';
            document.getElementById('nike').style.display = 'none';
            document.getElementById('vans').style.display = 'none';
            document.getElementById('converse').style.display = 'none';
            break;

        case 'vans':
            document.getElementById('adidas').style.display = 'none';
            document.getElementById('mlb').style.display = 'none';
            document.getElementById('gucci').style.display = 'none';
            document.getElementById('puma').style.display = 'none';
            document.getElementById('nike').style.display = 'none';
            document.getElementById('converse').style.display = 'none';
            break;

        case 'converse':
            document.getElementById('adidas').style.display = 'none';
            document.getElementById('mlb').style.display = 'none';
            document.getElementById('gucci').style.display = 'none';
            document.getElementById('puma').style.display = 'none';
            document.getElementById('vans').style.display = 'none';
            document.getElementById('nike').style.display = 'none';
            break;
    }
}