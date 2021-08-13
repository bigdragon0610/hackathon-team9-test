'use strict';

const logo = document.getElementById('header-logo');//ロゴのidを取得
const header_list_1 = document.getElementById('header-list-1');//企業理念のidを取得
const header_list_2 = document.getElementById('header-list-2');//施工事例のidを取得
const header_list_3 = document.getElementById('header-list-3');//採用情報のidを取得
const header_list_4 = document.getElementById('header-list-4');//お問い合わせのidを取得

// ロゴにカーソルが置かれると半透明になり、外れると元に戻る
logo.addEventListener('mousemove', ()=> {
logo.style.opacity = '0.5';
});
logo.addEventListener('mouseleave', ()=> {
    logo.style.opacity = '1';
});

// 企業理念、施工事例、採用情報、お問い合わせそれぞれにカーソルを合わせると半透明になり、カーソルを外すと元に戻る
//企業理念
header_list_1.addEventListener('mousemove', ()=> {
    header_list_1.style.opacity = '0.5';
});
header_list_1.addEventListener('mouseleave', ()=> {
    header_list_1.style.opacity = '1';
});

//施工事例
header_list_2.addEventListener('mousemove', ()=> {
    header_list_2.style.opacity = '0.5';
});
header_list_2.addEventListener('mouseleave', ()=> {
    header_list_2.style.opacity = '1';
});

//採用情報
header_list_3.addEventListener('mousemove', ()=> {
    header_list_3.style.opacity = '0.5';
});
header_list_3.addEventListener('mouseleave', ()=> {
    header_list_3.style.opacity = '1';
});

//お問い合わせ
header_list_4.addEventListener('mousemove', ()=> {
    header_list_4.style.opacity = '0.5';
});
header_list_4.addEventListener('mouseleave', ()=> {
    header_list_4.style.opacity = '1';
});

