module.exports = function main(a) {
    
	var lcd='';

    var lcd_number_row1 = ['._.','...','._.','._.','...','._.','._.','._.','._.','._.'];
    var lcd_number_row2 = ['|.|','..|','._|','._|','|_|','|_.','|_.','..|','|_|','|_|'];
    var lcd_number_row3 = ['|_|','..|','|_.','._|','..|','._|','|_|','..|','|_|','..|'];


    if(parseInt(a)){
        var temp=String(a);
        var lcd_row1=new Array(),lcd_row2=new Array(),lcd_row3=new Array();
        for (let i = 0; i < temp.length; i++) {
            lcd_row1.push(lcd_number_row1[parseInt(temp[i])]);
            lcd_row2.push(lcd_number_row2[parseInt(temp[i])]);
            lcd_row3.push(lcd_number_row3[parseInt(temp[i])]);
        }

        lcd=lcd_row1.join(' ')+'\n'+lcd_row2.join(' ')+'\n'+lcd_row3.join(' ')+'\n'



    }



    return lcd;
};