
function decrease(a){
    let t1=a.href.split('?');
    if (a.href.includes('profile.php?id=')){

        console.log(t1[1]);
        let t12='';
        if (t1[1].includes(';')){
            t12 = t1[1].split(';')[0];
            console.log(t12);
        };
        if (t1[1].includes('&')) {
            t12 = t1[1].split('&')[0];
            console.log(t12);
        };
        t1=t1[0]+'?'+t12;
    }else{
        t1=t1[0];
    };
    let t2='';
    let t3='';
    [t2,t3] = a.innerText.split(' ');
    return(t3+' '+t2+' '+t1+'<br>');
};

function parce(filename){
    let as_s=document.getElementsByTagName('a');
    let b = '';
    for (let i of as_s){
        b+=(decrease(i));
    };
    let p = document.getElementById('alpha_122333');
    p.innerHTML=b;
};
let a=''
a.includes
parce('parcing_try1.txt');
console.log('done1')