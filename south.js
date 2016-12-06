var fs=require('fs');
var data = fs.readFileSync('Agriculture.csv', {encoding:'utf8'}).toString();
var lines=data.split("\r\n");
var particulars;
var year=["2003","2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014"];
var value1=[],value2=[],value3=[],value4=[],value5=[],value6=[],value7=[],value8=[],value9=[],value10=[],value11=[],value12=[],value13=[],value14=[];
var j=0;
var sum1=0,sum2=0,sum3=0,sum4=0,sum5=0,sum6=0,sum7=0,sum8=0,sum9=0,sum10=0,sum11=0,sum12=0;
var str="";
var temp={};
var result=[];

for(var u=1;u<lines.length;u++)
{
    lines[u]=lines[u].replace("Annual,","Annual");
}
//Take all data for particulars and production
j=0;
for(var i=0;i<lines.length-1;i++)
{
 var line=lines[i].split(",");
 if(line[0].includes("Commercial"))
 {
        value1[j]=line[13];
        value2[j]=line[14];
        value3[j]=line[15];
        value4[j]=line[16];
        value5[j]=line[17];
        value6[j]=line[18];
        value7[j]=line[19];
        value8[j]=line[20];
        value9[j]=line[21];
        value10[j]=line[22];
        value11[j]=line[23];
        value12[j]=line[24];
        j++;
 }
}
for(var i=0;i<value12.length;i++)
{
    if(value1[i]=="NA")
    {
       value1[i]=0;
    }
    if(value2[i]=="NA")
    {
        value2[i]=0;
    }
    if(value3[i]=="NA")
    {
        value3[i]=0;
    }
    if(value4[i]=="NA")
    {
        value4[i]=0;
    }
    if(value5[i]=="NA")
    {
        value5[i]=0;
    }
    if(value6[i]=="NA")
    {
        value6[i]=0;
    }
    if(value7[i]=="NA")
    {
        value7[i]=0;
    }
    if(value8[i]=="NA")
    {
        value8[i]=0;
    }
    if(value9[i]=="NA")
    {
        value9[i]=0;
   }
    if(value10[i]=="NA")
    {
        value10[i]=0;
    }
    if(value11[i]=="NA")
    {
        value11[i]=0;
    }
    if(value12[i]=="NA")
    {
        value12[i]=0;
    }
    sum1=sum1+parseFloat(value1[i]);
    sum2=sum2+parseFloat(value2[i]);
    sum3=sum3+parseFloat(value3[i]);
    sum4=sum4+parseFloat(value4[i]);
    sum5=sum5+parseFloat(value5[i]);
    sum6=sum6+parseFloat(value6[i]);
    sum7=sum7+parseFloat(value7[i]);
    sum8=sum8+parseFloat(value8[i]);
    sum9=sum9+parseFloat(value9[i]);
    sum10=sum10+parseFloat(value10[i]);
    sum11=sum11+parseFloat(value11[i]);
    sum12=sum12+parseFloat(value12[i]);
}
var value=[sum1/5,sum2/5,sum3/5,sum4/5,sum5/5,sum6/5,sum7/5,sum8/5,sum9/5,sum10/5,sum11/5,sum12/5];
for(m=0;m<year.length;m++)
{
console.log(year);
 temp["Year"]=year[m];
 temp["Aggregatevalue"]=value[m];
 
 result.push(temp);
 temp={};
 
}
fs.writeFileSync("commercial.json",JSON.stringify(result),encoding="utf8"); 