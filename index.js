const month = document.getElementById('month');
const day = document.getElementById('day');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

btn.addEventListener('click',()=>{
    var month = document.getElementById("month").value;
	var day = document.getElementById("day").value;
	var zodiac = "山羊水瓶魚座牡羊牡牛双子蟹座獅子乙女天秤蠍座射手山羊";
		var arr = [20,19,21,21,21,22,23,23,23,23,22,22];
		var result2 = zodiac.substr(month*2-(day<arr[month-1]?2:0),2);
        
        result.innerHTML = result2
});
