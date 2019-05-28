module.exports = function main(a) {
    
	var lcd='';

    //初始化数组

    var lcd_number_row1 = ['._.','...','._.','._.','...','._.','._.','._.','._.','._.'];

    var lcd_number_row2 = ['|.|','..|','._|','._|','|_|','|_.','|_.','..|','|_|','|_|'];

    var lcd_number_row3 = ['|_|','..|','|_.','._|','..|','._|','|_|','..|','|_|','..|'];

    //判断输入是否为数字

    if(parseInt(a)){

        //将数字转换为字符串获取每一位数字

        var temp=String(a);

        //将每一位数字对应的lcd图案按行拼接

        var lcd_row1=new Array(),lcd_row2=new Array(),lcd_row3=new Array();

        for (let i = 0; i < temp.length; i++) {

            lcd_row1.push(lcd_number_row1[parseInt(temp[i])]);

            lcd_row2.push(lcd_number_row2[parseInt(temp[i])]);

            lcd_row3.push(lcd_number_row3[parseInt(temp[i])]);

        }

        //拼接lcd

        lcd=lcd_row1.join(' ')+'\n'+lcd_row2.join(' ')+'\n'+lcd_row3.join(' ')+'\n'



    }



    return lcd;
};