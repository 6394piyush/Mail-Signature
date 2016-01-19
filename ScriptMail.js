function SignatureValuesAppend(event, values, id)
{
    var append = String.fromCharCode(event.which);
    var SignatureTitle = values + append;
    ShowValuesOnKeyPress(SignatureTitle, id);
}

var tabs = document.querySelectorAll(".tab");
var tabheaders = document.querySelectorAll(".nav li a");

function hideAllTabs() {
    for(var i = 0; i < tabs.length; i++) {
        tabs[i].className="tab hide";
        tabheaders[i].className="";
    }    
}

function showTab(which, header) {
    hideAllTabs();
    document.getElementById(which).className="tab show";
    header.className='active';
}

function ShowValuesOnKeyPress(values, name,output) {
    switch (name) {

        case "First Name":
        {
            document.getElementById("Fname").innerHTML = "<b>" + values + "</b>";
            break;
        }
        case "Title":
        {
            document.getElementById("Title1").innerHTML = " <b>|</b> " + values + "</br>";
            break;
        }
        case "Website":
        {
            document.getElementById("Website1").innerHTML = values;
            document.getElementById("WebLink").setAttribute("href", values);
            document.getElementById("LogoLink").setAttribute("href", values);
            document.getElementById("Clink").setAttribute("href", values);
            break;
        }
        case "Company Name":
        {
            document.getElementById("C_name1").innerHTML = "<b>" + values + "</b>";

            break;
        }
        case "Email":
        {
            document.getElementById("Email1").innerHTML = values;
            document.getElementById("EmailLink").setAttribute("href", "mailto:" + values);
            break;
        }
        case "Mobile":

        {
            document.getElementById("Mobile1").innerHTML = "<b>M:&nbsp;</b>" + values;
            break;
        }
        case "Office Phone":
        {
            document.getElementById("O_phone1").innerHTML = "<b>T:&nbsp;</b>" + values;
            break;
        }
        case "Fax":
        {
            document.getElementById("Fax1").innerHTML = "<b>:&nbsp;|&nbsp;</b><b>F:&nbsp;</b>" + values;
            break;
        }

        case "Address1":
        {
            document.getElementById("AddressLine").innerHTML = values;
            break;
        }
        case "Address":
        {
            document.getElementById("AddressLine1").innerHTML = values + "</br>";
            break;
        }
          case "Facebook":
           {  var facebook="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAoHBwkHBgoJCAkLCwoMDxkQDw4ODx4WFxIZJCAmJSMgIyIoLTkwKCo2KyIjMkQyNjs9QEBAJjBGS0U+Sjk/QD3/2wBDAQsLCw8NDx0QEB09KSMpPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT3/wAARCABGAEYDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDOJ5oopK9o84Wikqa0tZb27itrdd0srBVHvRsBFSZr1HSvAel2UKm8j+2T4+Zn+6D7L/jWk3hnRSpB0y1x7RiuV4uCeiN1QkeO0Ur48x8DA3HA/Gm11GAuaKSigBaSlpKACum+H6K/ihSwyUhdl9jwP6msLTrM6hqNvaK4QzuEDEZxmvQ/DfgyXQtU+1veJMPLKbRGV649/asK84xi4t6s1pxbaZva3evp2i3l1EAZIomZc9M9q8vPjDXSSf7Rfn0Rf8K9S1exOp6Tc2auIzMhQMRnH4VxX/CtJ/8AoJRf9+T/AI1zUJU0nzm1VTb904nrz60lKw2uy9cEjNJXoHIFFFFAC0lLSUAXNIu0sNYtLqUMY4ZQ7BRk4HpXp2j+L7DW777Lax3CybC+ZFAGBj3968lrqPh7/wAjMf8Ar3f+a1z4impRcn0NaU2nY9H1C9j06wmu5gxjhUswUZOPaubb4jaSVIEV5nHH7tf8a1vFX/Ir6j/1wavHq58PRjUTcjWrUcXZCk5JPrSUUV6ByhRRRQAtJS0lABXUfD3/AJGY/wDXu/8ANa5et3wfqlrpGtm5vXKReUy5Ck8kj0+lZ1U3BpFwdpI9E8Vf8ivqP/XBq8er0bXvGGj3+hXltb3DtLLEVQGJhk/XFec1lhYuMXdF1mm9AooorpMQooooAU9aSiigAooooAKKKKACiiigBaKKKAP/2Q==";
            
               var img=document.createElement('img');
               img.setAttribute("class",'Logouser');
               img.setAttribute("id","FacebookOutput");
               img.setAttribute("height",'25px');
               img.setAttribute("width",'25px');
               img.setAttribute('src',facebook);
                        
                        var a=document.createElement('a');
                        a.setAttribute("herf",values);
                         
                       var test= document.getElementById('Facebook1').appendChild(a);
                       
                     a.appendChild(img);
                  
          
                           break;
            }
   case "Twitter":
            { 
                    var Twitter="data:image/jpeg;base64,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";
                    var image=document.getElementById("Social2");
                        image.setAttribute('src',Twitter);
                        document.getElementById("TwitterLink").setAttribute('href',values);
                       break;
            }
   case "Linkedin":
            {
            var Linkedin="data:image/jpeg;base64,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"; 
            var image=document.getElementById("Social3");
                         image.setAttribute('src',Linkedin);
                        document.getElementById("LinkedinLink").setAttribute('href',values);
          
                           break;
            }
   case "Google":
            {
          var Google="data:image/jpeg;base64,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";
          var image=document.getElementById("Social4");
                              image.setAttribute('src',Google);
                        document.getElementById("GoogleLink").setAttribute('href',values);
                
                        break;
            }
   case "Flicker":
            {
          var Flicker="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAoHBwkHBgoJCAkLCwoMDxkQDw4ODx4WFxIZJCAmJSMgIyIoLTkwKCo2KyIjMkQyNjs9QEBAJjBGS0U+Sjk/QD3/2wBDAQsLCw8NDx0QEB09KSMpPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT3/wAARCABGAEYDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD1kkk0lHeigAooooAKKKKACiiigBQaKSigA70Ud6wPFfiI6HapHbhTdz52buQijqx/pV06cqklGO5E5qEXKR0GD6Gkrxq41K9upTLPdzu57mQ/5Fbnh7xfdafcxw30zz2bEKS5y0fuD1x7V3Ty2cY3Tuzkhj4SlZqx6TQBnpTZJUiieWRgsaKWZuwA5zXlmveML7Vrh1gle3tAcJGh2kj1Yjqf0rhhBz2PdwGXVcbJqGiW7PViCOoNJXi1nrGoWEwltruZGH+2SD9QeDXp/hfxANf04u6hLmEhZVHT2YexpzpOOp0Zhk9XBx9pfmj+RtUUUVmeQHevOfiArjxBGzZ2Nbrt/AnNejd6yfEWgRa9ZCMsI7iIkxSYzj1B9jXThKqpVVKWxz4mm6lNpbnk9IehrauPCWtW8pT7A8no0RDKa2/D3gidbmO61ZVSOMhlgByWPbdjgD2r254qlCPNzI8mGHqSly2N7VIpv+EGmjOfOFku4d+AM/pmvJa92IDAhgCD1B7151rvgK7huHm0hPPt2ORFkB09ueorw6VRXdz9C4fx1KgpUajtfVNnHV23w1V/tt+wz5YiUH654/kax7TwXrd1KENm0C93mIUD+tejaFokGg6cLaE73J3SSEYLt/h6VVWa5bI786zCh9XdGElJy7a2NKiiiuU+MDvRR3ooAKKKKACiiigAooooAKKKKAFIpKKKACiiigAooooAKKKKAFAooooA/9k=";
          var image=document.getElementById("Social4");
                              image.setAttribute('src',Google);
                        document.getElementById("GoogleLink").setAttribute('href',values);
                
                        break;
            }
   case "Github":
            {
          var Github="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAoHBwkHBgoJCAkLCwoMDxkQDw4ODx4WFxIZJCAmJSMgIyIoLTkwKCo2KyIjMkQyNjs9QEBAJjBGS0U+Sjk/QD3/2wBDAQsLCw8NDx0QEB09KSMpPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT3/wAARCABGAEYDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDi6TNB60UAGaM0+GGW4lWKCN5ZG+6iKWJ+gFNdGjdkkVkdTgqwwR9RQAmaM0ZqWC2nunK20EszKMkRoWIHvigCLNGaKKADNFFFAAetFB60UAdb8MYnfxtbusTOscUhZgOEyMAn88fjXrmpeHtK1eaOXULCC4kj+6zrz/8AXH1rhvg+sSWerztgOHQMx7KFJ/xqWf4i6pdia40izsBaKziBbmQia4CDLFFGOg5x/M0Adg3hXQnj2HR7Hb/1wX/CrlhplnpVqLewtoreEfwRrjP19a8t/wCFv6swAXTrIsemC5z+Ga6TSPHN7/a1tZa3BYhbmQwLLZylhFMP+Wbg9DyOn+NAHkmoWstlqNzbXERililZWQ/w8/4VXrs/irEkfjHcgAaS2Rn9zlh/ICuMoAKKKKAA9anWSFVGY9zY54/+uf5VAetFAHW+C/E9vod/LFewmPT75PLlkUZ2nnDdOepB+tJJpl5pFqnl6dLqMduZPsN/aPvi2v3cKDyOoHHJ5yKoeHdStwZNL1eTGmXII3MM+RJ2cenofz7V2XhTwdbaPq51A6zBdwwRtKkNvJy+O7AHkD+eKAPPVsZ4YYJYYLj7Qr52+WxxjG3jGe36jHeur020Mmo2t/eWMmj6ZDdfbrqa7fHmSdljBAJGc4HJ5PPSvTzrUaxvI0TBFihl4PP7xiMfhivE/GduLTxdqMCvI6Ry5Te5YqCAcAntzQA/xP4hi1/X7m+FsPLYhIt33tg4Gf5/jWPI8TIdibW+n/1/6VDRQAUUUUAB60UHrRQAV1Hga5tNMub+8ubiJGe2a2igHMszvjAA9OOp9a5eigD2CbWrIy3+nRXEct1b2VtlEcYdo2LOqnoSBjj3rz7xrPa3viW4v7G7hube7CyKYycp8oBDA8g8Vz+BjGBiloAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP//Z";
         
                       var image=document.getElementById("Social4");
                              image.setAttribute('src',Github);
                        document.getElementById("GoogleLink").setAttribute('href',values);
                
                        break;
            }
   case "Imdb":
            {
          var Imdb="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAoHBwkHBgoJCAkLCwoMDxkQDw4ODx4WFxIZJCAmJSMgIyIoLTkwKCo2KyIjMkQyNjs9QEBAJjBGS0U+Sjk/QD3/2wBDAQsLCw8NDx0QEB09KSMpPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT3/wAARCABGAEYDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDpyeaMmg9aSvjz2hcmjJpKKYC5NGTSUUALk0ZNJRQA4E0UgopDA9aSlPWuje1g/wCEa83yY/M8jO7aM5+tb0aDq81nsrmdSpyW8zm80ZrsbWwtXsoi1vES0Yydg9Kh0nT4Bp0fmwRu+TksoJ6mutZbNtLm3V/yMPrUbPQ5TNFdPptpBJd36vDGwWbCgqDgY7VJ9jstQtJStssTKzICoAII78VMcvlKN1JX1/AbxKTtY5TNFdLZ2UM3h9W8qLzWjb52A6885rLv9GmsIBM0iSISAdvasqmEqQgprVWv6Gka0ZPl6meKKBRXIbAetdQ//Iq/9u9cuetbTatbHQ/sgL+b5Wz7vGfrXbg5xip8ztdHPXi3y2XU2IpPLtLL0bYp/FalDBLtYV4AjLY/EViTazbtZ2saF98Txlsr6dalGu2v9pmYl/L8oIPl5znNeosXTVlzLocjoz7FrSv+P3Uf+u/9Kfpn/HpP/wBdpP51nWOsWtvc3jyF9s0m5cL2qU67YwW8i2ySFmJIBXHJ75qadekkm5LS/wCLHOnNtpLsSW//ACKh/wCuL/1pda/5AK/8AqnbataR6OtpN5hbYVYKPX0NJq2rW1zYJb225uRkkYwBWUq1P2LXMvhSLUJe026mKKKBRXineB60lKetJTEFFFFABRRRQAUUUUAKKKBRSGGKMUUUAGKMUUUAGKMUUUAGKMUUUAKKKKKYH//Z"; 
          
                       var image=document.getElementById("Social4");       
                       image.setAttribute('src',Github);
                        document.getElementById("GoogleLink").setAttribute('href',values);
                
                        break;
            }
   case "Instagram":
            {
          var Instagram="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAQCAwMDAgQDAwMEBAQEBQkGBQUFBQsICAYJDQsNDQ0LDAwOEBQRDg8TDwwMEhgSExUWFxcXDhEZGxkWGhQWFxb/2wBDAQQEBAUFBQoGBgoWDwwPFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhb/wAARCABGAEUDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD6Y/an/aD0b4IX2h22q+HtQ1ZtcS4eM2ksaCLyjGDu3+vmjp6V5S37efhTZkfD7XDkgf8AH3D3OK5f/gr42PEHgDP/AD76j/6Fa18maLGt1qFvbj/lpKo/WuHFYidJSa6I9LAYSGIqwg18TS+8+4dU/bq8M2OrfYJPh9rTNtJ3C7ixTf8Ahu3wr/0T/W//AAKhr5V+PPh0aJ42PGMR/wA8f41xPmDoTSw+InVwOHxCf8SPN+LX6HDhVGpKrGX2ZOP3H3Cf27vCv/RPtb/8C4aB+3b4UPXwBrg/7eoa+Ht61l+Lmc6aDDIysGBypxVRq1JO1zqlRpxV7H3p/wAN2+Ff+hA1z/wLhqOT9vXwnHy3w+1z/gN3DX52Wcl1LnzbmWNSDtYsxBPBxnpnBH51vafmPS1Ejlm3HJJzWlSVSCvcyhGnN6I/Yf4N+MrX4hfDDRfGtnZzWdvrVotzHbzkM8QJIwSOCeKK479hs5/ZK8Bn/qDp/wChNRXQtjmloz5r/wCCx06xeIfh6WdVzbaj1P8AtW1fLnwrtLrVvE8D2KfaBaEzzJGCz7FBZiABzgA8Zz6V+jf7Vkki+NPDyIzqGsrkkD13xV5D44+H914v1TTtTtfEk2k3GnwSxKVso7gOHxnIc46DHQ9TXk4qpTnUlRns/wBT2MDKrQUMRS+KLuvkzxT9pK7HivVbvWNGsdRitLa3DzSXllJCIgGRck4IHzMo69WFeeWfhR7aws9Q8V6tDoFrep5kFubaS61GZOzpaxjcqHs0rRgjkEg17f8AFLwWfhf4Ri1u/wDE4177NAljpum3umwxwqxClNxGWMcYgMpQcMYsHO5gfnXRbLxB8RPGE0ZubiQ3lx5lxcTPuknk7yyN3bqcngZwMDArsy/BqWGo4Wj8FOPKu9rt/qeYo/VpTsvenJyfqzprnTfhuISsHjPxEkn8L3HhiJo8+4hvJJAPohPtXP8Ajbw3qOmeH4tSW4sdR0u7O2HUrCYyW+8EZjkyoaKTH8DqrdcAgZr3dv2c9Bh8PMIWkmniXmaO4ZmGO57H+VedaTeeIvg58Qo761eWe3IX7REG2rf24OCjD++pI2n+E7ccE111svdJc0XsOOJk1760PFZLZmH/AB8QADtv/rjJq9Dcxw2McRnjLKvOGHWv0s0m/i1XRbfUbaQSQ3MSyRuuMMpAIP4gg/jWN4iMyI2Hb868itjbL3kehRwqvoz1D9hRh/wyL4CbrnR16DP8bUV0f7Oru/wX0N3YsxjlyT1OJnor1adpQTseXUjabRwn7VX/ACPHh7/rxuf/AEOGud0NR5YPtXR/tVHHjbw6f+nK5/8AQ4a53Qz+7FeFiv8AepfI9jDf7tH5/meBf8FB4r2TSdF27zarM28DoGaOTb+OEmrmv2c9J02bwxqcFhbt9qltk8ty6gsSNwUHHc7fyr3n9ozwYPGPw9nhWSRXiTP7uPeV2ncr7RyQDkEDkpJJjnFfJ3hnW9f8A63Jo95BsaM58t5Fyqc8xksFkQliRhlySSG5ZT9DlOJVODj1PEzKFZS56bPTf2ffHmv6d8SWt/F1nfWdhYtI2o3l1Cyxx26q2fNYhRuPAAHLEZHqfNvjZ4y07xj4lWTRvMa0t4rht7JtzlAAAP8AeMXXvXP+Odc8ZeLru4g1HUr2Syd9yQzXHlQIe3+sbAx6jditT4O+A7jxNqUOmWSXE1m8qDULqEFPNwWIt4S4ySWG4tjIzvIVVUN3YitCMLtmdCVSVPka1Prn9mtLlPgfoEV5u8yOwtwN3UKbeMqPyI/WtfxKPlbmtfw/pi6N4ft7Bdu5ATIVHy7ickL6AE4A9AKyPEv3Gr4zFO7bPpMOrWR7d+zqP+LLaF/1zl/9HPRS/s6/8kX0P/rnL/6Oeiveo/w4+iPEq/xJerOC/awIXxl4eJ/587n/ANDirl9GlHljkVvftjXBg8WeG8n71pdfo8NcHpGphVGD+FeBjJ2xcvke1hIN4aL/AK3O6tZhjrXIePPhX4V8VhDc28MflyGVY3t1kiDt95lU4MbHuY2UnvV6HU12/fq2uqrwN1aU61noyZ0W90eb2/7N/g2G4ab7PpymT7x8q5k/8de4ZD+Kke1ekeC/Cmh+FLKKLTYF8yGEQpKyquyMHOxEUBY1zztQAZ9af/ay4wGqKbVRt+8KueJclqyY4ez0RpXUowea5jxJIu1uanu9UUKTvrnNe1JWRvmrhrVVY7KVNpn0l+zoR/wpfQz6xSf+jXopn7Nrq3wP8PuOd0Dn/wAivRX0tF/uo+iPn6v8SXqy98RPhz4U8cXdnc+IrS6mlsUdIGgvZoNocqWB8tlz9xeuaw4/gX8PI/uWerD/ALjd1/8AHKKKPZU5e84q/oKNWpH3VJ2Hr8EvAQ5EGsD6a3df/HKf/wAKX8C/889ZH01u6/8AjlFFHsaX8q+4ftqn8z+8c3wZ8DEY8vWv/B5d/wDxym/8KX8Cf88tZ/8AB3df/HKKKPY0/wCVfcHtan8z+8jb4I+AW+9b6uc+ut3X/wAcqOb4DfDmX/WWWqt/3G7v/wCOUUUOhSf2V9we2q3+J/edx4S0LS/DPhu00LR4HhsbGPy4I2laQgZzyzEknJPJNFFFbKKSMXJ3P//Z"; 
          var image=document.getElementById("Social4");
                       image.setAttribute('src',Github);
                        document.getElementById("GoogleLink").setAttribute('href',values);
                
                        break;
            }
   case "Maps":
            {
          var Maps="data:image/jpeg;base64,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";
          var image=document.getElementById("Social4");
                       image.setAttribute('src',Github);
                        document.getElementById("GoogleLink").setAttribute('href',values);
                
                        break;
            }
   case "Pintrest":
            {
          var Pintrest="data:image/jpeg;base64,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"; 
          var image=document.getElementById("Social4");
                       image.setAttribute('src',Github);
                        document.getElementById("GoogleLink").setAttribute('href',values);
                
                        break;
            }
   case "Quora":
            {
          var Quora="data:image/jpeg;base64,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"; 
          var image=document.getElementById("Social4");
                       image.setAttribute('src',Github);
                        document.getElementById("GoogleLink").setAttribute('href',values);
                
                        break;
            }
                      
   case "Skype":
            {
          var Skype="data:image/jpeg;base64,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";
          var image=document.getElementById("Social4");
                       image.setAttribute('src',Github);
                        document.getElementById("GoogleLink").setAttribute('href',values);
                
                        break;
            }
   case "Soundcloud":
            {
          var Soundcloud="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAoHBwkHBgoJCAkLCwoMDxkQDw4ODx4WFxIZJCAmJSMgIyIoLTkwKCo2KyIjMkQyNjs9QEBAJjBGS0U+Sjk/QD3/2wBDAQsLCw8NDx0QEB09KSMpPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT3/wAARCABGAEYDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwBaTNBor5U/QgzRmiigAzRmiigAzRmiigBaKQUUhAaKDRTGFFT2VnLqF7FawbfMlOBuOB61o2nhue8gR4p4w7zvAFYHGVBOc/hVwpTn8KMamIp0vjdv6/4Bj5xSZB7ivQPDPh20t7d5LqGOa6SVkLMNwGDjgGty50qxvIjHPawup/2QCPoe1dsMvnKPM3Y8urnVOFRxUW13PJKK2PEmhnRL1RGS1tLkxk9R6qax64ZwlTk4y3R61GrGtBTg9GAooFFQWBrY0rQxc3dul2WWO4t3nQIcHA4GfrWOa6HSNZhN9Zm6YRC3tHg3t0b+7+lb0FBy985cXKrGn+78/wAtPxLOi2qQf8I7Ko+eeWZ3OP8AZwB+laGg/wCrtv8AsJT/APoLVmafqVpFF4dElwim2MvnZP3M5xmrGjarY26QCa6jQrfTSHJ6KVbB/HIrupSgmte35RPIxEKklLRvf85nT6T9y6/6+pf/AEKtCuf03X9LhW48y+hUtcSMMnqC3Bq5/wAJLpH/AEEIPzr0IVafKveX3nkVMPVc37j+5lm/0y01NES8hEqo25QSRz07Vxvivw1BpkC3lkCkRYK8ZOQM9CK6n/hJtI/6CEH51zHizxLbajbLZWLGRN4Z5MYHHQCubFuhKm27X/E7sujioVoxSaj13tY5QUUCivDPqgNFBopjCiiigAooooAKKKKAAUUCikIWkxRRQAYoxRRQAYoxRRQAYoxRRQAtFFFAH//Z";
          var image=document.getElementById("Social4");
                       image.setAttribute('src',Github);
                        document.getElementById("GoogleLink").setAttribute('href',values);
                
                        break;
            }
   case "Tumblr":
            {
          var Tumblr="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAoHBwkHBgoJCAkLCwoMDxkQDw4ODx4WFxIZJCAmJSMgIyIoLTkwKCo2KyIjMkQyNjs9QEBAJjBGS0U+Sjk/QD3/2wBDAQsLCw8NDx0QEB09KSMpPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT3/wAARCABGAEYDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDm6KKK7ziCiitvwdpY1fxPawSRiSBMyTKwyNoHf6nApN2VxpXdjEor1jxl4e0my8KX1xa6dbQzIq7XSMAj5h3ryelCfMrjlHldgoooqiQooooEFFFFAzY8NeG5vEt5Lbw3EcHlIHZnUngnHAFeseG/DFn4atWjt90k0mPNmcfM3t7D2rzjwFrtjoOpXc2oStGkkIRSELZOc9q9X03UbfVrCO8s3LwSZ2sVIzg46H6VzVnK9uhvSStfqVfEelya1oN1YQyJHJMAAzg4GGB7fSuB/wCFVal/0ELT/vlq9I1HULfSrCW8u3KQRAFmCk4ycdB9awf+Fi+Hv+fuT/vy/wDhUwc0vdKkot+8eVaxpkmjarPYTSJJJCQCyA4OQD3+tUq1vFWoW+qeJLy8tGLwSlSrEEZwoHQ/SsmuqN7anO99AooopkhRRRQMK9n8Af8AIl2H0f8A9DavGK9l+Hv/ACJll9ZP/QzWNb4TWl8RJ48/5EvUf91f/Q1rxavavHSlvBmpY7Ip/JhXitFH4QrbhRRRWxkFFFFAgooooGFeu/Da8juPCiQqR5ltK6OPqdw/nXkVaeg6/eeHr77RZsCGGJIm+7IPf/GoqR5kXCXK7nuVxbxXdvJBcRrJFIpV0boQa5Vfhloa3HmE3TJnPlGX5fzxn9agsvilpcqD7ZbXNu/faodfzHP6VPN8TdCjXMf2qU+ixY/mRXOozWxs5Qe5wXjWwttM8Tz2tlCsMCRptRfdeawa1fEusJr2uTX8cLQo4VQjHJ4GKyq6Y3tqc8t9AoooqiQxRRRQAUUUUAFFFFABRRRQAUUUUhn/2Q==";
          var image=document.getElementById("Social4");
                       image.setAttribute('src',Github);
                        document.getElementById("GoogleLink").setAttribute('href',values);
                
                        break;
            }
   case "Vine":
            {
          var Vine="data:image/jpeg;base64,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";
          var image=document.getElementById("Social4");
                       image.setAttribute('src',Github);
                        document.getElementById("GoogleLink").setAttribute('href',values);
                
                        break;
            }
   case "Wordpress":
            {
          var Wordpress="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAoHBwkHBgoJCAkLCwoMDxkQDw4ODx4WFxIZJCAmJSMgIyIoLTkwKCo2KyIjMkQyNjs9QEBAJjBGS0U+Sjk/QD3/2wBDAQsLCw8NDx0QEB09KSMpPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT3/wAARCABGAEYDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDkYmfYvzt09aso8n99vzqGNeBitPStMudVvEtLOPfK4zzwqDuzHsB/UAZJAr21ZK7PNbbdkVw8gBJkbA6kmtiy8O63fgNBZ3BQ/wATkRg+4LEZ/Cuwi0/QvBcCT3R+0Xp5UlQ0h6/cXoo9ye+M9BTBrfiXWE3aXp8dtbsflkflsf3gWwCPop+tczrt6wWndmipJfE9eyMA+Ctf2giEH289P8azb/R9W01Wa8tp4kHV/vIP+BDI/Wu3ay8ZKjN/bFs+OQixR5Pt/qx/Omf8JPrOkFf7d0wNDx+8h4x+OSpPtlamNafkwdOHmjzlmk5/eN+dRM0n/PRvzr0bUfDml+JLM32hvHHPn5lA2qx9Cv8ACe/T69c1wF1bS20zwzIUkRirKeoIrop1I1FpuZzjKG+xSLyZ4YminOMUVqoRfQpPQIxhQewFem2EcfgrwqbiePdez4JQ95DnamfRRnP0YjqBXEeFLMXviOwhcZTf5jenygtj8cY/Guu8RQtr/iyDSkdkjhhJdtudjFS2fccRj2ya5Kzu1B7bsumrJyW+yGeH4dMuZm1XXNTsZr2U7likuY/kHqRn06Dt9enXy6rYwxxSTXttFHMN0byTKocccgk8jkfmK8v06RLPVIGvoY2jik2zRzAMqjo2R7cn6ivTriwtLqJYri2ikRFKoGQHYMY+X0/D0rDEw5ZK70Lw8+aLstRv9vaT/wBBXT//AAKT/Gm6hqltDo014PLuoQhChWDK5J24zyMZOD+P0rgJFbT79llRJWt5fmRhlX2npz2P9a9EENtcaf5CIn2SWPAVBgbT6Y6dc1NaiqTi73THRrOqpK1mjzWy1WfS9U+2Wyxxlj88Me5Y2X+7ySR7HnH6V0Hi7TbfWdHi1vTwCwQGTjlk6c+6nr7Zz0FYZ0xofEUWnyrvxcojgDG5Cw59sqc+2a6LwjmNNU0a5xJDBIVIzkMG3K4A9Plz9Wrqr8sWqkOn5GFDmknCf9M84dM0VPdQNbXc0En34naNvqDg/wAqK6r9jNOxreA3A8TW4PUxuB9dv+Ga6qzOPiVqWTwbVQD6nbF/ga4HQL8abrNndsQqRuN5PZSMMfyJrt/EudI8Q6drKp+5B8uXA9iM+5Kk4/3K4qq9+3dHTB+76MzPFtkLTXJHUDZcr5o479GH5jP412Hh69+26JbOzZdF8t8nJyvGT9Rg/jWZ4vt1vNEW7iIcwMHVlOco2Acev8J+grH8L60NPtNQSQjCx/aIw3ALD5Tn6koPwqZfvaCfVCj+6rNdGN8QOZ9YurhV/d+aYQcfxIqhgf8APSul8K3v2nRljY/NbsYvw6j8MED8KoTaQU8GiMjM8ai4JYYbdySDjqQpI/AVkeF9VXT72cTf6p4WcqOpKAtx+G79KqVqlCy+yZwTp1rv7RtWlut545vbkYMdqoGR/fKhf6P+VRaCN/jXVpI+EUMrf728f4NU+iSDSfDcup3xJeYm4kJ4LZOFAP8AtcEf79V/Cpay0m/1m9Ykzkyv23hc5IHYli314rGT0l6JG8VqvmzjPEDA6/qJXgfapP8A0I0VnzTPLK0khy7ksx9SetFelGNopHI1d3K0bYxXoXhvUoPEWhvo2oNmaKPCnOGZR91gfUcZ654z1xXm8TfIv0q1b3MttMk0EjRyxncjqcFTWNSnzx03Noy5X5HdWeozeG2bRtcR3sZVZYZ0zjYRgj1xz06rnHTGMXSrIXuuRWe6OWLzTvZDlHRTkn6HGB9RWxp3i7T9XtfsWvRRoTgeYw/dsemc9UOCeeg55HSrH/CIx7vtWjapNbq6nGxtwbPOAykfL+f41zxnycylo39xcoc9mtUjrt3evL9UslsNZltHkMUSScPt3FUPIbA64U5wK6EaN4mchJNXRYs8lHbdj8FH86f/AMIvY2Za71zUpLgE/fnk8tTxwCSSSQf9r8KijKNK93e/YqrF1babdyAef4vuo4YImtNFtSPqSBjA/wBrHGOQoOTnIBg8aa3CkKaNYYEcRHnbPujbjbGPpwT6EAeopus+NYlgNnoSeVGBt84Js2r6Ivb6kDHYdCOMZ62pUnJqTVktkROVtE7tiO9FQu9FdqM0iGI5jTHcA1MMjvRRWMW7FPccr59amt7ua2lJtppYH7tE5Qn8qKKrfcnYuNrmqbf+Qnff+BL/AONUZJ2lcyyu8kh6u53N+Z5oooUIrZC5m92MZ8c0wtuooouNDU+Y9aKKKiT1LP/Z";
          var image=document.getElementById("Social4");
                       image.setAttribute('src',Github);
                        document.getElementById("GoogleLink").setAttribute('href',values);
                
                        break;
            }
   case "Youtube":
            {
          var Youtube="data:image/jpeg;base64,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"; 
          var image=document.getElementById("Social4");
                       image.setAttribute('src',Github);
                        document.getElementById("GoogleLink").setAttribute('href',values);
                
                        break;
            }
    
        

        }
}



function PreviewImageFile(input, output) {
    var file = document.getElementById(input).files[0];

    var reader = new FileReader();

    reader.onloadend = function () {
        var Preview = document.getElementById(output);
        Preview.src = reader.result;
    };
    if (file) {
        reader.readAsDataURL(file);

    }
}


function CodeToShow() {
    var code_to_show = document.getElementById("right").innerHTML;
    code_to_show = replaceAll(code_to_show, "<", "&lt");

    code_to_show = replaceAll(code_to_show, ">", "&gt");
    document.getElementById("CodeFetch").innerHTML = "<pre>"+code_to_show+"</pre>";

}

function escapeRegExp(str)
{
    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}


function replaceAll(str, find, replace)
{
    return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}




function ChangeTheme(value) {
    switch (value) {
        case "Logo Aligned left":
        {
         //   document.getElementById('File1').setAttribute("style", "float:left");
        }
        case "Logo Aligned Middle":
        {
            //divs.insertBefore(logo, divs.childNodes[12]);
             break;
        }
        case "Logo Aligned Bottom":
        {

            //divs.insertBefore(logo, divs.childNodes[31]);
            break;
        }
    }
}


function ColorPicker(what, color) {
    switch (what) {
        case "First Name":
        {
            document.getElementById("Fname").style.color = "#" + color;
            break;
        }
        case "Title":
        {
            document.getElementById("Title1").style.color = "#" + color;
            break;
        }
        case "Email":
        {
            document.getElementById("Email1").style.color = "#" + color;
            break;
        }
        case "Mobile":
        {
            document.getElementById("Mobile1").style.color = "#" + color;
            break;
        }
        case "Company Name":
        {
            document.getElementById("C_name1").style.color = "#" + color;
            break;
        }
        case "Office Phone":
        {
            document.getElementById("O_phone1").style.color = "#" + color;
            break;
        }
        case "Fax":
        {
            document.getElementById("Fax1").style.color = "#" + color;
            break;
        }
        case "AddressLine":
        {
            document.getElementById("AddressLine1").style.color = "#" + color;
            break;
        }
        case "AddressLine1":
        {
            document.getElementById("AddressLine").style.color = "#" + color;
            break;
        }
        case "Website":
        {
            document.getElementById("Website1").style.color = "#" + color;
            break;
        }
    }
}


function SizeChange(whose,value){
    switch(whose){
        case "Logouser":{
                var logo=document.getElementsByClassName("Logouser");
                   for(i=0;i<=logo.length;i++){
                    logo[i].height=value;
                    logo[i].width=value;
      }
              
                break;
        }
        case "Logoss":{
              
           var logo=document.getElementsByClassName("Logoss");
         for(i=0;i<=logo.length;i++){
           logo[i].height=value;
          logo[i].width=value;
      }
               
                break;
        }
    case "Main Logo":{
            var logo=document.getElementById("Logo");
            logo.setAttribute("height",value);
            logo.setAttribute("width",value);
            break;
    }
    case "Text":{
            var text=document.getElementById("signature-preview");
            text.style.fontSize=value+"px";
      
            break;
    }
    }
}























"use strict";
window.jscolor || (window.jscolor = function () {
    var e = {register: function () {
            e.attachDOMReadyEvent(e.init), e.attachEvent(document, "mousedown", e.onDocumentMouseDown), e.attachEvent(document, "touchstart", e.onDocumentTouchStart), e.attachEvent(window, "resize", e.onWindowResize)
        }, init: function () {
            e.jscolor.lookupClass && e.jscolor.installByClassName(e.jscolor.lookupClass)
        }, tryInstallOnElements: function (t, n) {
            var r = new RegExp("(^|\\s)(" + n + ")(\\s*(\\{[^}]*\\})|\\s|$)", "i");
            for (var i = 0; i < t.length; i += 1) {
                if (t[i].type !== undefined && t[i].type.toLowerCase() == "color" && e.isColorAttrSupported)
                    continue;
                var s;
                if (!t[i].jscolor && t[i].className && (s = t[i].className.match(r))) {
                    var o = t[i], u = null, a = e.getDataAttr(o, "jscolor");
                    a !== null ? u = a : s[4] && (u = s[4]);
                    var f = {};
                    if (u)
                        try {
                            f = (new Function("return (" + u + ")"))()
                        } catch (l) {
                            e.warn("Error parsing jscolor options: " + l + ":\n" + u)
                        }
                    o.jscolor = new e.jscolor(o, f)
                }
            }
        }, isColorAttrSupported: function () {
            var e = document.createElement("input");
            if (e.setAttribute) {
                e.setAttribute("type", "color");
                if (e.type.toLowerCase() == "color")
                    return!0
            }
            return!1
        }(), isCanvasSupported: function () {
            var e = document.createElement("canvas");
            return!!e.getContext && !!e.getContext("2d")
        }(), fetchElement: function (e) {
            return typeof e == "string" ? document.getElementById(e) : e
        }, isElementType: function (e, t) {
            return e.nodeName.toLowerCase() === t.toLowerCase()
        }, getDataAttr: function (e, t) {
            var n = "data-" + t, r = e.getAttribute(n);
            return r !== null ? r : null
        }, attachEvent: function (e, t, n) {
            e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent && e.attachEvent("on" + t, n)
        }, detachEvent: function (e, t, n) {
            e.removeEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent && e.detachEvent("on" + t, n)
        }, _attachedGroupEvents: {}, attachGroupEvent: function (t, n, r, i) {
            e._attachedGroupEvents.hasOwnProperty(t) || (e._attachedGroupEvents[t] = []), e._attachedGroupEvents[t].push([n, r, i]), e.attachEvent(n, r, i)
        }, detachGroupEvents: function (t) {
            if (e._attachedGroupEvents.hasOwnProperty(t)) {
                for (var n = 0; n < e._attachedGroupEvents[t].length; n += 1) {
                    var r = e._attachedGroupEvents[t][n];
                    e.detachEvent(r[0], r[1], r[2])
                }
                delete e._attachedGroupEvents[t]
            }
        }, attachDOMReadyEvent: function (e) {
            var t = !1, n = function () {
                t || (t = !0, e())
            };
            if (document.readyState === "complete") {
                setTimeout(n, 1);
                return
            }
            if (document.addEventListener)
                document.addEventListener("DOMContentLoaded", n, !1), window.addEventListener("load", n, !1);
            else if (document.attachEvent) {
                document.attachEvent("onreadystatechange", function () {
                    document.readyState === "complete" && (document.detachEvent("onreadystatechange", arguments.callee), n())
                }), window.attachEvent("onload", n);
                if (document.documentElement.doScroll && window == window.top) {
                    var r = function () {
                        if (!document.body)
                            return;
                        try {
                            document.documentElement.doScroll("left"), n()
                        } catch (e) {
                            setTimeout(r, 1)
                        }
                    };
                    r()
                }
            }
        }, warn: function (e) {
            window.console && window.console.warn && window.console.warn(e)
        }, preventDefault: function (e) {
            e.preventDefault && e.preventDefault(), e.returnValue = !1
        }, captureTarget: function (t) {
            t.setCapture && (e._capturedTarget = t, e._capturedTarget.setCapture())
        }, releaseTarget: function () {
            e._capturedTarget && (e._capturedTarget.releaseCapture(), e._capturedTarget = null)
        }, fireEvent: function (e, t) {
            if (!e)
                return;
            if (document.createEvent) {
                var n = document.createEvent("HTMLEvents");
                n.initEvent(t, !0, !0), e.dispatchEvent(n)
            } else if (document.createEventObject) {
                var n = document.createEventObject();
                e.fireEvent("on" + t, n)
            } else
                e["on" + t] && e["on" + t]()
        }, classNameToList: function (e) {
            return e.replace(/^\s+|\s+$/g, "").split(/\s+/)
        }, hasClass: function (e, t) {
            return t ? -1 != (" " + e.className.replace(/\s+/g, " ") + " ").indexOf(" " + t + " ") : !1
        }, setClass: function (t, n) {
            var r = e.classNameToList(n);
            for (var i = 0; i < r.length; i += 1)
                e.hasClass(t, r[i]) || (t.className += (t.className ? " " : "") + r[i])
        }, unsetClass: function (t, n) {
            var r = e.classNameToList(n);
            for (var i = 0; i < r.length; i += 1) {
                var s = new RegExp("^\\s*" + r[i] + "\\s*|" + "\\s*" + r[i] + "\\s*$|" + "\\s+" + r[i] + "(\\s+)", "g");
                t.className = t.className.replace(s, "$1")
            }
        }, getStyle: function (e) {
            return window.getComputedStyle ? window.getComputedStyle(e) : e.currentStyle
        }, setStyle: function () {
            var e = document.createElement("div"), t = function (t) {
                for (var n = 0; n < t.length; n += 1)
                    if (t[n]in e.style)
                        return t[n]
            }, n = {borderRadius: t(["borderRadius", "MozBorderRadius", "webkitBorderRadius"]), boxShadow: t(["boxShadow", "MozBoxShadow", "webkitBoxShadow"])};
            return function (e, t, r) {
                switch (t.toLowerCase()) {
                    case"opacity":
                        var i = Math.round(parseFloat(r) * 100);
                        e.style.opacity = r, e.style.filter = "alpha(opacity=" + i + ")";
                        break;
                    default:
                        e.style[n[t]] = r
                    }
            }
        }(), setBorderRadius: function (t, n) {
            e.setStyle(t, "borderRadius", n || "0")
        }, setBoxShadow: function (t, n) {
            e.setStyle(t, "boxShadow", n || "none")
        }, getElementPos: function (t, n) {
            var r = 0, i = 0, s = t.getBoundingClientRect();
            r = s.left, i = s.top;
            if (!n) {
                var o = e.getViewPos();
                r += o[0], i += o[1]
            }
            return[r, i]
        }, getElementSize: function (e) {
            return[e.offsetWidth, e.offsetHeight]
        }, getAbsPointerPos: function (e) {
            e || (e = window.event);
            var t = 0, n = 0;
            return typeof e.changedTouches != "undefined" && e.changedTouches.length ? (t = e.changedTouches[0].clientX, n = e.changedTouches[0].clientY) : typeof e.clientX == "number" && (t = e.clientX, n = e.clientY), {x: t, y: n}
        }, getRelPointerPos: function (e) {
            e || (e = window.event);
            var t = e.target || e.srcElement, n = t.getBoundingClientRect(), r = 0, i = 0, s = 0, o = 0;
            return typeof e.changedTouches != "undefined" && e.changedTouches.length ? (s = e.changedTouches[0].clientX, o = e.changedTouches[0].clientY) : typeof e.clientX == "number" && (s = e.clientX, o = e.clientY), r = s - n.left, i = o - n.top, {x: r, y: i}
        }, getViewPos: function () {
            var e = document.documentElement;
            return[(window.pageXOffset || e.scrollLeft) - (e.clientLeft || 0), (window.pageYOffset || e.scrollTop) - (e.clientTop || 0)]
        }, getViewSize: function () {
            var e = document.documentElement;
            return[window.innerWidth || e.clientWidth, window.innerHeight || e.clientHeight]
        }, redrawPosition: function () {
            if (e.picker && e.picker.owner) {
                var t = e.picker.owner, n, r;
                t.fixed ? (n = e.getElementPos(t.targetElement, !0), r = [0, 0]) : (n = e.getElementPos(t.targetElement), r = e.getViewPos());
                var i = e.getElementSize(t.targetElement), s = e.getViewSize(), o = e.getPickerOuterDims(t), u, a, f;
                switch (t.position.toLowerCase()) {
                    case"left":
                        u = 1, a = 0, f = -1;
                        break;
                    case"right":
                        u = 1, a = 0, f = 1;
                        break;
                    case"top":
                        u = 0, a = 1, f = -1;
                        break;
                    default:
                        u = 0, a = 1, f = 1
                }
                var l = (i[a] + o[a]) / 2;
                if (!t.smartPosition)
                    var c = [n[u], n[a] + i[a] - l + l * f];
                else
                    var c = [-r[u] + n[u] + o[u] > s[u] ? -r[u] + n[u] + i[u] / 2 > s[u] / 2 && n[u] + i[u] - o[u] >= 0 ? n[u] + i[u] - o[u] : n[u] : n[u], -r[a] + n[a] + i[a] + o[a] - l + l * f > s[a] ? -r[a] + n[a] + i[a] / 2 > s[a] / 2 && n[a] + i[a] - l - l * f >= 0 ? n[a] + i[a] - l - l * f : n[a] + i[a] - l + l * f : n[a] + i[a] - l + l * f >= 0 ? n[a] + i[a] - l + l * f : n[a] + i[a] - l - l * f];
                var h = c[u], p = c[a], d = t.fixed ? "fixed" : "absolute", v = (c[0] + o[0] > n[0] || c[0] < n[0] + i[0]) && c[1] + o[1] < n[1] + i[1];
                e._drawPosition(t, h, p, d, v)
            }
        }, _drawPosition: function (t, n, r, i, s) {
            var o = s ? 0 : t.shadowBlur;
            e.picker.wrap.style.position = i, e.picker.wrap.style.left = n + "px", e.picker.wrap.style.top = r + "px", e.setBoxShadow(e.picker.boxS, t.shadow ? new e.BoxShadow(0, o, t.shadowBlur, 0, t.shadowColor) : null)
        }, getPickerDims: function (t) {
            var n = !!e.getSliderComponent(t), r = [2 * t.insetWidth + 2 * t.padding + t.width + (n ? 2 * t.insetWidth + e.getPadToSliderPadding(t) + t.sliderSize : 0), 2 * t.insetWidth + 2 * t.padding + t.height + (t.closable ? 2 * t.insetWidth + t.padding + t.buttonHeight : 0)];
            return r
        }, getPickerOuterDims: function (t) {
            var n = e.getPickerDims(t);
            return[n[0] + 2 * t.borderWidth, n[1] + 2 * t.borderWidth]
        }, getPadToSliderPadding: function (e) {
            return Math.max(e.padding, 1.5 * (2 * e.pointerBorderWidth + e.pointerThickness))
        }, getPadYComponent: function (e) {
            switch (e.mode.charAt(1).toLowerCase()) {
                case"v":
                    return"v"
            }
            return"s"
        }, getSliderComponent: function (e) {
            if (e.mode.length > 2)
                switch (e.mode.charAt(2).toLowerCase()) {
                    case"s":
                        return"s";
                    case"v":
                        return"v"
                }
            return null
        }, onDocumentMouseDown: function (t) {
            t || (t = window.event);
            var n = t.target || t.srcElement;
            n._jscLinkedInstance ? n._jscLinkedInstance.showOnClick && n._jscLinkedInstance.show() : n._jscControlName ? e.onControlPointerStart(t, n, n._jscControlName, "mouse") : e.picker && e.picker.owner && e.picker.owner.hide()
        }, onDocumentTouchStart: function (t) {
            t || (t = window.event);
            var n = t.target || t.srcElement;
            n._jscLinkedInstance ? n._jscLinkedInstance.showOnClick && n._jscLinkedInstance.show() : n._jscControlName ? e.onControlPointerStart(t, n, n._jscControlName, "touch") : e.picker && e.picker.owner && e.picker.owner.hide()
        }, onWindowResize: function (t) {
            e.redrawPosition()
        }, onParentScroll: function (t) {
            e.picker && e.picker.owner && e.picker.owner.hide()
        }, _pointerMoveEvent: {mouse: "mousemove", touch: "touchmove"}, _pointerEndEvent: {mouse: "mouseup", touch: "touchend"}, _pointerOrigin: null, _capturedTarget: null, onControlPointerStart: function (t, n, r, i) {
            var s = n._jscInstance;
            e.preventDefault(t), e.captureTarget(n);
            var o = function (s, o) {
                e.attachGroupEvent("drag", s, e._pointerMoveEvent[i], e.onDocumentPointerMove(t, n, r, i, o)), e.attachGroupEvent("drag", s, e._pointerEndEvent[i], e.onDocumentPointerEnd(t, n, r, i))
            };
            o(document, [0, 0]);
            if (window.parent && window.frameElement) {
                var u = window.frameElement.getBoundingClientRect(), a = [-u.left, -u.top];
                o(window.parent.window.document, a)
            }
            var f = e.getAbsPointerPos(t), l = e.getRelPointerPos(t);
            e._pointerOrigin = {x: f.x - l.x, y: f.y - l.y};
            switch (r) {
                case"pad":
                    switch (e.getSliderComponent(s)) {
                        case"s":
                            s.hsv[1] === 0 && s.fromHSV(null, 100, null);
                            break;
                        case"v":
                            s.hsv[2] === 0 && s.fromHSV(null, null, 100)
                    }
                    e.setPad(s, t, 0, 0);
                    break;
                case"sld":
                    e.setSld(s, t, 0)
            }
            e.dispatchFineChange(s)
        }, onDocumentPointerMove: function (t, n, r, i, s) {
            return function (t) {
                var i = n._jscInstance;
                switch (r) {
                    case"pad":
                        t || (t = window.event), e.setPad(i, t, s[0], s[1]), e.dispatchFineChange(i);
                        break;
                    case"sld":
                        t || (t = window.event), e.setSld(i, t, s[1]), e.dispatchFineChange(i)
                    }
            }
        }, onDocumentPointerEnd: function (t, n, r, i) {
            return function (t) {
                var r = n._jscInstance;
                e.detachGroupEvents("drag"), e.releaseTarget(), e.dispatchChange(r)
            }
        }, dispatchChange: function (t) {
            t.valueElement && e.isElementType(t.valueElement, "input") && e.fireEvent(t.valueElement, "change")
        }, dispatchFineChange: function (e) {
            if (e.onFineChange) {
                var t;
                typeof e.onFineChange == "string" ? t = new Function(e.onFineChange) : t = e.onFineChange, t.call(e)
            }
        }, setPad: function (t, n, r, i) {
            var s = e.getAbsPointerPos(n), o = r + s.x - e._pointerOrigin.x - t.padding - t.insetWidth, u = i + s.y - e._pointerOrigin.y - t.padding - t.insetWidth, a = o * (360 / (t.width - 1)), f = 100 - u * (100 / (t.height - 1));
            switch (e.getPadYComponent(t)) {
                case"s":
                    t.fromHSV(a, f, null, e.leaveSld);
                    break;
                case"v":
                    t.fromHSV(a, null, f, e.leaveSld)
                }
        }, setSld: function (t, n, r) {
            var i = e.getAbsPointerPos(n), s = r + i.y - e._pointerOrigin.y - t.padding - t.insetWidth, o = 100 - s * (100 / (t.height - 1));
            switch (e.getSliderComponent(t)) {
                case"s":
                    t.fromHSV(null, o, null, e.leavePad);
                    break;
                case"v":
                    t.fromHSV(null, null, o, e.leavePad)
                }
        }, _vmlNS: "jsc_vml_", _vmlCSS: "jsc_vml_css_", _vmlReady: !1, initVML: function () {
            if (!e._vmlReady) {
                var t = document;
                t.namespaces[e._vmlNS] || t.namespaces.add(e._vmlNS, "urn:schemas-microsoft-com:vml");
                if (!t.styleSheets[e._vmlCSS]) {
                    var n = ["shape", "shapetype", "group", "background", "path", "formulas", "handles", "fill", "stroke", "shadow", "textbox", "textpath", "imagedata", "line", "polyline", "curve", "rect", "roundrect", "oval", "arc", "image"], r = t.createStyleSheet();
                    r.owningElement.id = e._vmlCSS;
                    for (var i = 0; i < n.length; i += 1)
                        r.addRule(e._vmlNS + "\\:" + n[i], "behavior:url(#default#VML);")
                }
                e._vmlReady = !0
            }
        }, createPalette: function () {
            var t = {elm: null, draw: null};
            if (e.isCanvasSupported) {
                var n = document.createElement("canvas"), r = n.getContext("2d"), i = function (e, t, i) {
                    n.width = e, n.height = t, r.clearRect(0, 0, n.width, n.height);
                    var s = r.createLinearGradient(0, 0, n.width, 0);
                    s.addColorStop(0, "#F00"), s.addColorStop(1 / 6, "#FF0"), s.addColorStop(2 / 6, "#0F0"), s.addColorStop(.5, "#0FF"), s.addColorStop(4 / 6, "#00F"), s.addColorStop(5 / 6, "#F0F"), s.addColorStop(1, "#F00"), r.fillStyle = s, r.fillRect(0, 0, n.width, n.height);
                    var o = r.createLinearGradient(0, 0, 0, n.height);
                    switch (i.toLowerCase()) {
                        case"s":
                            o.addColorStop(0, "rgba(255,255,255,0)"), o.addColorStop(1, "rgba(255,255,255,1)");
                            break;
                        case"v":
                            o.addColorStop(0, "rgba(0,0,0,0)"), o.addColorStop(1, "rgba(0,0,0,1)")
                    }
                    r.fillStyle = o, r.fillRect(0, 0, n.width, n.height)
                };
                t.elm = n, t.draw = i
            } else {
                e.initVML();
                var s = document.createElement("div");
                s.style.position = "relative", s.style.overflow = "hidden";
                var o = document.createElement(e._vmlNS + ":fill");
                o.type = "gradient", o.method = "linear", o.angle = "90", o.colors = "16.67% #F0F, 33.33% #00F, 50% #0FF, 66.67% #0F0, 83.33% #FF0";
                var u = document.createElement(e._vmlNS + ":rect");
                u.style.position = "absolute", u.style.left = "-1px", u.style.top = "-1px", u.stroked = !1, u.appendChild(o), s.appendChild(u);
                var a = document.createElement(e._vmlNS + ":fill");
                a.type = "gradient", a.method = "linear", a.angle = "180", a.opacity = "0";
                var f = document.createElement(e._vmlNS + ":rect");
                f.style.position = "absolute", f.style.left = "-1px", f.style.top = "-1px", f.stroked = !1, f.appendChild(a), s.appendChild(f);
                var i = function (e, t, n) {
                    s.style.width = e + "px", s.style.height = t + "px", u.style.width = f.style.width = e + 1 + "px", u.style.height = f.style.height = t + 1 + "px", o.color = "#F00", o.color2 = "#F00";
                    switch (n.toLowerCase()) {
                        case"s":
                            a.color = a.color2 = "#FFF";
                            break;
                        case"v":
                            a.color = a.color2 = "#000"
                        }
                };
                t.elm = s, t.draw = i
            }
            return t
        }, createSliderGradient: function () {
            var t = {elm: null, draw: null};
            if (e.isCanvasSupported) {
                var n = document.createElement("canvas"), r = n.getContext("2d"), i = function (e, t, i, s) {
                    n.width = e, n.height = t, r.clearRect(0, 0, n.width, n.height);
                    var o = r.createLinearGradient(0, 0, 0, n.height);
                    o.addColorStop(0, i), o.addColorStop(1, s), r.fillStyle = o, r.fillRect(0, 0, n.width, n.height)
                };
                t.elm = n, t.draw = i
            } else {
                e.initVML();
                var s = document.createElement("div");
                s.style.position = "relative", s.style.overflow = "hidden";
                var o = document.createElement(e._vmlNS + ":fill");
                o.type = "gradient", o.method = "linear", o.angle = "180";
                var u = document.createElement(e._vmlNS + ":rect");
                u.style.position = "absolute", u.style.left = "-1px", u.style.top = "-1px", u.stroked = !1, u.appendChild(o), s.appendChild(u);
                var i = function (e, t, n, r) {
                    s.style.width = e + "px", s.style.height = t + "px", u.style.width = e + 1 + "px", u.style.height = t + 1 + "px", o.color = n, o.color2 = r
                };
                t.elm = s, t.draw = i
            }
            return t
        }, leaveValue: 1, leaveStyle: 2, leavePad: 4, leaveSld: 8, BoxShadow: function () {
            var e = function (e, t, n, r, i, s) {
                this.hShadow = e, this.vShadow = t, this.blur = n, this.spread = r, this.color = i, this.inset = !!s
            };
            return e.prototype.toString = function () {
                var e = [Math.round(this.hShadow) + "px", Math.round(this.vShadow) + "px", Math.round(this.blur) + "px", Math.round(this.spread) + "px", this.color];
                return this.inset && e.push("inset"), e.join(" ")
            }, e
        }(), jscolor: function (t, n) {
            function i(e, t, n) {
                e /= 255, t /= 255, n /= 255;
                var r = Math.min(Math.min(e, t), n), i = Math.max(Math.max(e, t), n), s = i - r;
                if (s === 0)
                    return[null, 0, 100 * i];
                var o = e === r ? 3 + (n - t) / s : t === r ? 5 + (e - n) / s : 1 + (t - e) / s;
                return[60 * (o === 6 ? 0 : o), 100 * (s / i), 100 * i]
            }
            function s(e, t, n) {
                var r = 255 * (n / 100);
                if (e === null)
                    return[r, r, r];
                e /= 60, t /= 100;
                var i = Math.floor(e), s = i % 2 ? e - i : 1 - (e - i), o = r * (1 - t), u = r * (1 - t * s);
                switch (i) {
                    case 6:
                    case 0:
                        return[r, u, o];
                    case 1:
                        return[u, r, o];
                    case 2:
                        return[o, r, u];
                    case 3:
                        return[o, u, r];
                    case 4:
                        return[u, o, r];
                    case 5:
                        return[r, o, u]
                    }
            }
            function o() {
                e.unsetClass(d.targetElement, d.activeClass), e.picker.wrap.parentNode.removeChild(e.picker.wrap), delete e.picker.owner
            }
            function u() {
                function l() {
                    var e = d.insetColor.split(/\s+/), n = e.length < 2 ? e[0] : e[1] + " " + e[0] + " " + e[0] + " " + e[1];
                    t.btn.style.borderColor = n
                }
                d._processParentElementsInDOM(), e.picker || (e.picker = {owner: null, wrap: document.createElement("div"), box: document.createElement("div"), boxS: document.createElement("div"), boxB: document.createElement("div"), pad: document.createElement("div"), padB: document.createElement("div"), padM: document.createElement("div"), padPal: e.createPalette(), cross: document.createElement("div"), crossBY: document.createElement("div"), crossBX: document.createElement("div"), crossLY: document.createElement("div"), crossLX: document.createElement("div"), sld: document.createElement("div"), sldB: document.createElement("div"), sldM: document.createElement("div"), sldGrad: e.createSliderGradient(), sldPtrS: document.createElement("div"), sldPtrIB: document.createElement("div"), sldPtrMB: document.createElement("div"), sldPtrOB: document.createElement("div"), btn: document.createElement("div"), btnT: document.createElement("span")}, e.picker.pad.appendChild(e.picker.padPal.elm), e.picker.padB.appendChild(e.picker.pad), e.picker.cross.appendChild(e.picker.crossBY), e.picker.cross.appendChild(e.picker.crossBX), e.picker.cross.appendChild(e.picker.crossLY), e.picker.cross.appendChild(e.picker.crossLX), e.picker.padB.appendChild(e.picker.cross), e.picker.box.appendChild(e.picker.padB), e.picker.box.appendChild(e.picker.padM), e.picker.sld.appendChild(e.picker.sldGrad.elm), e.picker.sldB.appendChild(e.picker.sld), e.picker.sldB.appendChild(e.picker.sldPtrOB), e.picker.sldPtrOB.appendChild(e.picker.sldPtrMB), e.picker.sldPtrMB.appendChild(e.picker.sldPtrIB), e.picker.sldPtrIB.appendChild(e.picker.sldPtrS), e.picker.box.appendChild(e.picker.sldB), e.picker.box.appendChild(e.picker.sldM), e.picker.btn.appendChild(e.picker.btnT), e.picker.box.appendChild(e.picker.btn), e.picker.boxB.appendChild(e.picker.box), e.picker.wrap.appendChild(e.picker.boxS), e.picker.wrap.appendChild(e.picker.boxB));
                var t = e.picker, n = !!e.getSliderComponent(d), r = e.getPickerDims(d), i = 2 * d.pointerBorderWidth + d.pointerThickness + 2 * d.crossSize, s = e.getPadToSliderPadding(d), o = Math.min(d.borderRadius, Math.round(d.padding * Math.PI)), u = "crosshair";
                t.wrap.style.clear = "both", t.wrap.style.width = r[0] + 2 * d.borderWidth + "px", t.wrap.style.height = r[1] + 2 * d.borderWidth + "px", t.wrap.style.zIndex = d.zIndex, t.box.style.width = r[0] + "px", t.box.style.height = r[1] + "px", t.boxS.style.position = "absolute", t.boxS.style.left = "0", t.boxS.style.top = "0", t.boxS.style.width = "100%", t.boxS.style.height = "100%", e.setBorderRadius(t.boxS, o + "px"), t.boxB.style.position = "relative", t.boxB.style.border = d.borderWidth + "px solid", t.boxB.style.borderColor = d.borderColor, t.boxB.style.background = d.backgroundColor, e.setBorderRadius(t.boxB, o + "px"), t.padM.style.background = t.sldM.style.background = "#FFF", e.setStyle(t.padM, "opacity", "0"), e.setStyle(t.sldM, "opacity", "0"), t.pad.style.position = "relative", t.pad.style.width = d.width + "px", t.pad.style.height = d.height + "px", t.padPal.draw(d.width, d.height, e.getPadYComponent(d)), t.padB.style.position = "absolute", t.padB.style.left = d.padding + "px", t.padB.style.top = d.padding + "px", t.padB.style.border = d.insetWidth + "px solid", t.padB.style.borderColor = d.insetColor, t.padM._jscInstance = d, t.padM._jscControlName = "pad", t.padM.style.position = "absolute", t.padM.style.left = "0", t.padM.style.top = "0", t.padM.style.width = d.padding + 2 * d.insetWidth + d.width + s / 2 + "px", t.padM.style.height = r[1] + "px", t.padM.style.cursor = u, t.cross.style.position = "absolute", t.cross.style.left = t.cross.style.top = "0", t.cross.style.width = t.cross.style.height = i + "px", t.crossBY.style.position = t.crossBX.style.position = "absolute", t.crossBY.style.background = t.crossBX.style.background = d.pointerBorderColor, t.crossBY.style.width = t.crossBX.style.height = 2 * d.pointerBorderWidth + d.pointerThickness + "px", t.crossBY.style.height = t.crossBX.style.width = i + "px", t.crossBY.style.left = t.crossBX.style.top = Math.floor(i / 2) - Math.floor(d.pointerThickness / 2) - d.pointerBorderWidth + "px", t.crossBY.style.top = t.crossBX.style.left = "0", t.crossLY.style.position = t.crossLX.style.position = "absolute", t.crossLY.style.background = t.crossLX.style.background = d.pointerColor, t.crossLY.style.height = t.crossLX.style.width = i - 2 * d.pointerBorderWidth + "px", t.crossLY.style.width = t.crossLX.style.height = d.pointerThickness + "px", t.crossLY.style.left = t.crossLX.style.top = Math.floor(i / 2) - Math.floor(d.pointerThickness / 2) + "px", t.crossLY.style.top = t.crossLX.style.left = d.pointerBorderWidth + "px", t.sld.style.overflow = "hidden", t.sld.style.width = d.sliderSize + "px", t.sld.style.height = d.height + "px", t.sldGrad.draw(d.sliderSize, d.height, "#000", "#000"), t.sldB.style.display = n ? "block" : "none", t.sldB.style.position = "absolute", t.sldB.style.right = d.padding + "px", t.sldB.style.top = d.padding + "px", t.sldB.style.border = d.insetWidth + "px solid", t.sldB.style.borderColor = d.insetColor, t.sldM._jscInstance = d, t.sldM._jscControlName = "sld", t.sldM.style.display = n ? "block" : "none", t.sldM.style.position = "absolute", t.sldM.style.right = "0", t.sldM.style.top = "0", t.sldM.style.width = d.sliderSize + s / 2 + d.padding + 2 * d.insetWidth + "px", t.sldM.style.height = r[1] + "px", t.sldM.style.cursor = "default", t.sldPtrIB.style.border = t.sldPtrOB.style.border = d.pointerBorderWidth + "px solid " + d.pointerBorderColor, t.sldPtrOB.style.position = "absolute", t.sldPtrOB.style.left = -(2 * d.pointerBorderWidth + d.pointerThickness) + "px", t.sldPtrOB.style.top = "0", t.sldPtrMB.style.border = d.pointerThickness + "px solid " + d.pointerColor, t.sldPtrS.style.width = d.sliderSize + "px", t.sldPtrS.style.height = m + "px", t.btn.style.display = d.closable ? "block" : "none", t.btn.style.position = "absolute", t.btn.style.left = d.padding + "px", t.btn.style.bottom = d.padding + "px", t.btn.style.padding = "0 15px", t.btn.style.height = d.buttonHeight + "px", t.btn.style.border = d.insetWidth + "px solid", l(), t.btn.style.color = d.buttonColor, t.btn.style.font = "12px sans-serif", t.btn.style.textAlign = "center";
                try {
                    t.btn.style.cursor = "pointer"
                } catch (c) {
                    t.btn.style.cursor = "hand"
                }
                t.btn.onmousedown = function () {
                    d.hide()
                }, t.btnT.style.lineHeight = d.buttonHeight + "px", t.btnT.innerHTML = "", t.btnT.appendChild(document.createTextNode(d.closeText)), a(), f(), e.picker.owner && e.picker.owner !== d && e.unsetClass(e.picker.owner.targetElement, d.activeClass), e.picker.owner = d, e.isElementType(v, "body") ? e.redrawPosition() : e._drawPosition(d, 0, 0, "relative", !1), t.wrap.parentNode != v && v.appendChild(t.wrap), e.setClass(d.targetElement, d.activeClass)
            }
            function a() {
                switch (e.getPadYComponent(d)) {
                    case"s":
                        var t = 1;
                        break;
                    case"v":
                        var t = 2
                }
                var n = Math.round(d.hsv[0] / 360 * (d.width - 1)), r = Math.round((1 - d.hsv[t] / 100) * (d.height - 1)), i = 2 * d.pointerBorderWidth + d.pointerThickness + 2 * d.crossSize, o = -Math.floor(i / 2);
                e.picker.cross.style.left = n + o + "px", e.picker.cross.style.top = r + o + "px";
                switch (e.getSliderComponent(d)) {
                    case"s":
                        var u = s(d.hsv[0], 100, d.hsv[2]), a = s(d.hsv[0], 0, d.hsv[2]), f = "rgb(" + Math.round(u[0]) + "," + Math.round(u[1]) + "," + Math.round(u[2]) + ")", l = "rgb(" + Math.round(a[0]) + "," + Math.round(a[1]) + "," + Math.round(a[2]) + ")";
                        e.picker.sldGrad.draw(d.sliderSize, d.height, f, l);
                        break;
                    case"v":
                        var c = s(d.hsv[0], d.hsv[1], 100), f = "rgb(" + Math.round(c[0]) + "," + Math.round(c[1]) + "," + Math.round(c[2]) + ")", l = "#000";
                        e.picker.sldGrad.draw(d.sliderSize, d.height, f, l)
                    }
            }
            function f() {
                var t = e.getSliderComponent(d);
                if (t) {
                    switch (t) {
                        case"s":
                            var n = 1;
                            break;
                        case"v":
                            var n = 2
                    }
                    var r = Math.round((1 - d.hsv[n] / 100) * (d.height - 1));
                    e.picker.sldPtrOB.style.top = r - (2 * d.pointerBorderWidth + d.pointerThickness) - Math.floor(m / 2) + "px"
                }
            }
            function l() {
                return e.picker && e.picker.owner === d
            }
            function c() {
                d.importColor()
            }
            this.value = null, this.valueElement = t, this.styleElement = t, this.required = !0, this.refine = !0, this.hash = !1, this.uppercase = !0, this.onFineChange = null, this.activeClass = "jscolor-active", this.minS = 0, this.maxS = 100, this.minV = 0, this.maxV = 100, this.hsv = [0, 0, 100], this.rgb = [255, 255, 255], this.width = 181, this.height = 101, this.showOnClick = !0, this.mode = "HSV", this.position = "bottom", this.smartPosition = !0, this.sliderSize = 16, this.crossSize = 8, this.closable = !1, this.closeText = "Close", this.buttonColor = "#000000", this.buttonHeight = 18, this.padding = 12, this.backgroundColor = "#FFFFFF", this.borderWidth = 1, this.borderColor = "#BBBBBB", this.borderRadius = 8, this.insetWidth = 1, this.insetColor = "#BBBBBB", this.shadow = !0, this.shadowBlur = 15, this.shadowColor = "rgba(0,0,0,0.2)", this.pointerColor = "#4C4C4C", this.pointerBorderColor = "#FFFFFF", this.pointerBorderWidth = 1, this.pointerThickness = 2, this.zIndex = 1e3, this.container = null;
            for (var r in n)
                n.hasOwnProperty(r) && (this[r] = n[r]);
            this.hide = function () {
                l() && o()
            }, this.show = function () {
                u()
            }, this.redraw = function () {
                l() && u()
            }, this.importColor = function () {
                this.valueElement ? e.isElementType(this.valueElement, "input") ? this.refine ? !this.required && /^\s*$/.test(this.valueElement.value) ? (this.valueElement.value = "", this.styleElement && (this.styleElement.style.backgroundImage = this.styleElement._jscOrigStyle.backgroundImage, this.styleElement.style.backgroundColor = this.styleElement._jscOrigStyle.backgroundColor, this.styleElement.style.color = this.styleElement._jscOrigStyle.color), this.exportColor(e.leaveValue | e.leaveStyle)) : this.fromString(this.valueElement.value) || this.exportColor() : this.fromString(this.valueElement.value, e.leaveValue) || (this.styleElement && (this.styleElement.style.backgroundImage = this.styleElement._jscOrigStyle.backgroundImage, this.styleElement.style.backgroundColor = this.styleElement._jscOrigStyle.backgroundColor, this.styleElement.style.color = this.styleElement._jscOrigStyle.color), this.exportColor(e.leaveValue | e.leaveStyle)) : this.exportColor() : this.exportColor()
            }, this.exportColor = function (t) {
                if (!(t & e.leaveValue) && this.valueElement) {
                    var n = this.toString();
                    this.uppercase && (n = n.toUpperCase()), this.hash && (n = "#" + n), e.isElementType(this.valueElement, "input") ? this.valueElement.value = n : this.valueElement.innerHTML = n
                }
                t & e.leaveStyle || this.styleElement && (this.styleElement.style.backgroundImage = "none", this.styleElement.style.backgroundColor = "#" + this.toString(), this.styleElement.style.color = this.isLight() ? "#000" : "#FFF"), !(t & e.leavePad) && l() && a(), !(t & e.leaveSld) && l() && f()
            }, this.fromHSV = function (e, t, n, r) {
                if (e !== null) {
                    if (isNaN(e))
                        return!1;
                    e = Math.max(0, Math.min(360, e))
                }
                if (t !== null) {
                    if (isNaN(t))
                        return!1;
                    t = Math.max(0, Math.min(100, this.maxS, t), this.minS)
                }
                if (n !== null) {
                    if (isNaN(n))
                        return!1;
                    n = Math.max(0, Math.min(100, this.maxV, n), this.minV)
                }
                this.rgb = s(e === null ? this.hsv[0] : this.hsv[0] = e, t === null ? this.hsv[1] : this.hsv[1] = t, n === null ? this.hsv[2] : this.hsv[2] = n), this.exportColor(r)
            }, this.fromRGB = function (e, t, n, r) {
                if (e !== null) {
                    if (isNaN(e))
                        return!1;
                    e = Math.max(0, Math.min(255, e))
                }
                if (t !== null) {
                    if (isNaN(t))
                        return!1;
                    t = Math.max(0, Math.min(255, t))
                }
                if (n !== null) {
                    if (isNaN(n))
                        return!1;
                    n = Math.max(0, Math.min(255, n))
                }
                var o = i(e === null ? this.rgb[0] : e, t === null ? this.rgb[1] : t, n === null ? this.rgb[2] : n);
                o[0] !== null && (this.hsv[0] = Math.max(0, Math.min(360, o[0]))), o[2] !== 0 && (this.hsv[1] = o[1] === null ? null : Math.max(0, this.minS, Math.min(100, this.maxS, o[1]))), this.hsv[2] = o[2] === null ? null : Math.max(0, this.minV, Math.min(100, this.maxV, o[2]));
                var u = s(this.hsv[0], this.hsv[1], this.hsv[2]);
                this.rgb[0] = u[0], this.rgb[1] = u[1], this.rgb[2] = u[2], this.exportColor(r)
            }, this.fromString = function (e, t) {
                var n;
                if (n = e.match(/^\W*([0-9A-F]{3}([0-9A-F]{3})?)\W*$/i))
                    return n[1].length === 6 ? this.fromRGB(parseInt(n[1].substr(0, 2), 16), parseInt(n[1].substr(2, 2), 16), parseInt(n[1].substr(4, 2), 16), t) : this.fromRGB(parseInt(n[1].charAt(0) + n[1].charAt(0), 16), parseInt(n[1].charAt(1) + n[1].charAt(1), 16), parseInt(n[1].charAt(2) + n[1].charAt(2), 16), t), !0;
                if (n = e.match(/^\W*rgba?\(([^)]*)\)\W*$/i)) {
                    var r = n[1].split(","), i = /^\s*(\d*)(\.\d+)?\s*$/, s, o, u;
                    if (r.length >= 3 && (s = r[0].match(i)) && (o = r[1].match(i)) && (u = r[2].match(i))) {
                        var a = parseFloat((s[1] || "0") + (s[2] || "")), f = parseFloat((o[1] || "0") + (o[2] || "")), l = parseFloat((u[1] || "0") + (u[2] || ""));
                        return this.fromRGB(a, f, l, t), !0
                    }
                }
                return!1
            }, this.toString = function () {
                return(256 | Math.round(this.rgb[0])).toString(16).substr(1) + (256 | Math.round(this.rgb[1])).toString(16).substr(1) + (256 | Math.round(this.rgb[2])).toString(16).substr(1)
            }, this.toHEXString = function () {
                return"#" + this.toString().toUpperCase()
            }, this.toRGBString = function () {
                return"rgb(" + Math.round(this.rgb[0]) + "," + Math.round(this.rgb[1]) + "," + Math.round(this.rgb[2]) + ")"
            }, this.isLight = function () {
                return.213 * this.rgb[0] + .715 * this.rgb[1] + .072 * this.rgb[2] > 127.5
            }, this._processParentElementsInDOM = function () {
                if (this._linkedElementsProcessed)
                    return;
                this._linkedElementsProcessed = !0;
                var t = this.targetElement;
                do {
                    var n = e.getStyle(t);
                    n && n.position.toLowerCase() === "fixed" && (this.fixed = !0), t !== this.targetElement && (t._jscEventsAttached || (e.attachEvent(t, "scroll", e.onParentScroll), t._jscEventsAttached = !0))
                } while ((t = t.parentNode) && !e.isElementType(t, "body"))
            };
            if (typeof t == "string") {
                var h = t, p = document.getElementById(h);
                p ? this.targetElement = p : e.warn("Could not find target element with ID '" + h + "'")
            } else
                t ? this.targetElement = t : e.warn("Invalid target element: '" + t + "'");
            if (this.targetElement._jscLinkedInstance) {
                e.warn("Cannot link jscolor twice to the same element. Skipping.");
                return
            }
            this.targetElement._jscLinkedInstance = this, this.valueElement = e.fetchElement(this.valueElement), this.styleElement = e.fetchElement(this.styleElement);
            var d = this, v = this.container ? e.fetchElement(this.container) : document.getElementsByTagName("body")[0], m = 3;
            if (e.isElementType(this.targetElement, "button"))
                if (this.targetElement.onclick) {
                    var g = this.targetElement.onclick;
                    this.targetElement.onclick = function (e) {
                        return g.call(this, e), !1
                    }
                } else
                    this.targetElement.onclick = function () {
                        return!1
                    };
            if (this.valueElement && e.isElementType(this.valueElement, "input")) {
                var y = function () {
                    d.fromString(d.valueElement.value, e.leaveValue), e.dispatchFineChange(d)
                };
                e.attachEvent(this.valueElement, "keyup", y), e.attachEvent(this.valueElement, "input", y), e.attachEvent(this.valueElement, "blur", c), this.valueElement.setAttribute("autocomplete", "off")
            }
            this.styleElement && (this.styleElement._jscOrigStyle = {backgroundImage: this.styleElement.style.backgroundImage, backgroundColor: this.styleElement.style.backgroundColor, color: this.styleElement.style.color}), this.value ? this.fromString(this.value) || this.exportColor() : this.importColor()
        }};
    return e.jscolor.lookupClass = "jscolor", e.jscolor.installByClassName = function (t) {
        var n = document.getElementsByTagName("input"), r = document.getElementsByTagName("button");
        e.tryInstallOnElements(n, t), e.tryInstallOnElements(r, t)
    }, e.register(), e.jscolor
}());