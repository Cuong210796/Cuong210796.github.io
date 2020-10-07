function changeProductList(type, element) {
    let tabs = document.getElementsByClassName('tab-item');
    for (i = 0; i < tabs.length; i++) {
        tabs[i].style.background = '#b14c38';
    }
    element.style.background = '#ee4d2d';


    document.getElementById(type).style.display = 'block';

    switch (type) {
        case 'all-item':
            document.getElementById('adidas').style.display = 'block';
            document.getElementById('nike').style.display = 'block';
            document.getElementById('mlb').style.display = 'block';
            document.getElementById('gucci').style.display = 'block';
            document.getElementById('puma').style.display = 'block';
            document.getElementById('vans').style.display = 'block';
            document.getElementById('converse').style.display = 'block';
            break;

        case 'adidas':
            document.getElementById('nike').style.display = 'none';
            document.getElementById('mlb').style.display = 'none';
            document.getElementById('gucci').style.display = 'none';
            document.getElementById('puma').style.display = 'none';
            document.getElementById('vans').style.display = 'none';
            document.getElementById('converse').style.display = 'none';
            document.getElementById('line1').style.display = 'block';
            document.getElementById('line2').style.display = 'none';
            document.getElementById('line3').style.display = 'none';
            document.getElementById('line4').style.display = 'none';
            document.getElementById('line5').style.display = 'none';
            document.getElementById('line6').style.display = 'none';
            document.getElementById('line7').style.display = 'none';
            break;

        case 'nike':
            document.getElementById('adidas').style.display = 'none';
            document.getElementById('mlb').style.display = 'none';
            document.getElementById('gucci').style.display = 'none';
            document.getElementById('puma').style.display = 'none';
            document.getElementById('vans').style.display = 'none';
            document.getElementById('converse').style.display = 'none';
            document.getElementById('line1').style.display = 'none';
            document.getElementById('line2').style.display = 'block';
            document.getElementById('line3').style.display = 'none';
            document.getElementById('line4').style.display = 'none';
            document.getElementById('line5').style.display = 'none';
            document.getElementById('line6').style.display = 'none';
            document.getElementById('line7').style.display = 'none';
            break;

        case 'mlb':
            document.getElementById('adidas').style.display = 'none';
            document.getElementById('nike').style.display = 'none';
            document.getElementById('gucci').style.display = 'none';
            document.getElementById('puma').style.display = 'none';
            document.getElementById('vans').style.display = 'none';
            document.getElementById('converse').style.display = 'none';
            document.getElementById('line1').style.display = 'none';
            document.getElementById('line2').style.display = 'none';
            document.getElementById('line3').style.display = 'block';
            document.getElementById('line4').style.display = 'none';
            document.getElementById('line5').style.display = 'none';
            document.getElementById('line6').style.display = 'none';
            document.getElementById('line7').style.display = 'none';
            break;

        case 'gucci':
            document.getElementById('adidas').style.display = 'none';
            document.getElementById('mlb').style.display = 'none';
            document.getElementById('nike').style.display = 'none';
            document.getElementById('puma').style.display = 'none';
            document.getElementById('vans').style.display = 'none';
            document.getElementById('converse').style.display = 'none';
            document.getElementById('line1').style.display = 'none';
            document.getElementById('line2').style.display = 'none';
            document.getElementById('line3').style.display = 'none';
            document.getElementById('line4').style.display = 'block';
            document.getElementById('line5').style.display = 'none';
            document.getElementById('line6').style.display = 'none';
            document.getElementById('line7').style.display = 'none';
            break;

        case 'puma':
            document.getElementById('adidas').style.display = 'none';
            document.getElementById('mlb').style.display = 'none';
            document.getElementById('gucci').style.display = 'none';
            document.getElementById('nike').style.display = 'none';
            document.getElementById('vans').style.display = 'none';
            document.getElementById('converse').style.display = 'none';
            document.getElementById('line1').style.display = 'none';
            document.getElementById('line2').style.display = 'none';
            document.getElementById('line3').style.display = 'none';
            document.getElementById('line4').style.display = 'none';
            document.getElementById('line5').style.display = 'block';
            document.getElementById('line6').style.display = 'none';
            document.getElementById('line7').style.display = 'none';
            break;

        case 'vans':
            document.getElementById('adidas').style.display = 'none';
            document.getElementById('mlb').style.display = 'none';
            document.getElementById('gucci').style.display = 'none';
            document.getElementById('puma').style.display = 'none';
            document.getElementById('nike').style.display = 'none';
            document.getElementById('converse').style.display = 'none';
            document.getElementById('line1').style.display = 'none';
            document.getElementById('line2').style.display = 'none';
            document.getElementById('line3').style.display = 'none';
            document.getElementById('line4').style.display = 'none';
            document.getElementById('line5').style.display = 'none';
            document.getElementById('line6').style.display = 'block';
            document.getElementById('line7').style.display = 'none';
            break;

        case 'converse':
            document.getElementById('adidas').style.display = 'none';
            document.getElementById('mlb').style.display = 'none';
            document.getElementById('gucci').style.display = 'none';
            document.getElementById('puma').style.display = 'none';
            document.getElementById('vans').style.display = 'none';
            document.getElementById('nike').style.display = 'none';
            document.getElementById('line1').style.display = 'none';
            document.getElementById('line2').style.display = 'none';
            document.getElementById('line3').style.display = 'none';
            document.getElementById('line4').style.display = 'none';
            document.getElementById('line5').style.display = 'none';
            document.getElementById('line6').style.display = 'none';
            document.getElementById('line7').style.display = 'block';
            break;
    }
}