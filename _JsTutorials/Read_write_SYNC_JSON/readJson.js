
const path=require('path');
const fs=require('fs');
const util=require('util');
const { log } = require('console');
const readFile=util.promisify(fs.readFile);

async function readJson(){
    const resolovedPath=path.resolve();
    const data = await readFile("C:/Users/GGurkhude/Desktop/newSeq/sequences/allMasterProductCodesInOneObj.json",'utf-8')
    // console.log(data);
    console.log(JSON.parse(""));
    return data;
    // return Promise.resolve(data); // no need to use promise
}
readJson();



let rawData="{\"masterProductCodes\":[{\"masterProductCode\":\"MENTOR-MODULE-O-01\"},{\"masterProductCode\":\"MENTOR-MODULE-O-02\"},{\"masterProductCode\":\"MENTOR-MODULE-O-03\"},{\"masterProductCode\":\"MENTOR-MODULE-O-06\"},{\"masterProductCode\":\"MENTOR-MODULE-O-07\"},{\"masterProductCode\":\"MENTOR-MODULE-O-08\"},{\"masterProductCode\":\"MENTOR-MODULE-O-09\"},{\"masterProductCode\":\"MENTOR-MODULE-O-11\"},{\"masterProductCode\":\"MENTOR-MODULE-O-12\"},{\"masterProductCode\":\"MENTOR-MODULE-O-14\"},{\"masterProductCode\":\"MENTOR-MODULE-A-01\"},{\"masterProductCode\":\"MENTOR-MODULE-RCCH-02A\"},{\"masterProductCode\":\"MENTOR-MODULE-AA-01\"},{\"masterProductCode\":\"MENTOR-MODULE-EDS-36\"},{\"masterProductCode\":\"MENTOR-MODULE-D-14\"},{\"masterProductCode\":\"MENTOR-MODULE-A-01R\"},{\"masterProductCode\":\"MENTOR-MODULE-DYK-39Q\"},{\"masterProductCode\":\"MENTOR-MODULE-AA-02\"},{\"masterProductCode\":\"MENTOR-MODULE-DYK-15Q\"},{\"masterProductCode\":\"MENTOR-MODULE-A-02\"},{\"masterProductCode\":\"MENTOR-MODULE-DYK-01\"},{\"masterProductCode\":\"MENTOR-MODULE-A-02R\"},{\"masterProductCode\":\"MENTOR-MODULE-D-07AR\"},{\"masterProductCode\":\"MENTOR-MODULE-DYK-32Q\"},{\"masterProductCode\":\"MENTOR-MODULE-EDS-46A\"},{\"masterProductCode\":\"MENTOR-MODULE-DYK-32\"},{\"masterProductCode\":\"MENTOR-MODULE-DYK-04\"},{\"masterProductCode\":\"MENTOR-MODULE-DYK-15\"},{\"masterProductCode\":\"MENTOR-MODULE-DYK-23Q\"},{\"masterProductCode\":\"MENTOR-MODULE-DYK-13\"},{\"masterProductCode\":\"MENTOR-MODULE-EDS-21C\"},{\"masterProductCode\":\"MENTOR-MODULE-DYK-34\"},{\"masterProductCode\":\"MENTOR-MODULE-DYK-08\"},{\"masterProductCode\":\"MENTOR-MODULE-DYK-34Q\"},{\"masterProductCode\":\"MENTOR-MODULE-EDS-48D\"},{\"masterProductCode\":\"MENTOR-MODULE-DYK-10\"},{\"masterProductCode\":\"MENTOR-MODULE-DYK-22\"},{\"masterProductCode\":\"MENTOR-MODULE-EDS-48E\"},{\"masterProductCode\":\"MENTOR-MODULE-DYK-27\"},{\"masterProductCode\":\"MENTOR-MODULE-DYK-12Q\"},{\"masterProductCode\":\"MENTOR-MODULE-DYK-42\"},{\"masterProductCode\":\"MENTOR-MODULE-B-01\"},{\"masterProductCode\":\"MENTOR-MODULE-AB-01\"},{\"masterProductCode\":\"MENTOR-MODULE-EDS-37A\"},{\"masterProductCode\":\"MENTOR-MODULE-B-02\"},{\"masterProductCode\":\"MENTOR-MODULE-DYK-36\"},{\"masterProductCode\":\"MENTOR-MODULE-AB-02\"},{\"masterProductCode\":\"MENTOR-MODULE-B-01R\"},{\"masterProductCode\":\"MENTOR-MODULE-AB-03\"},{\"masterProductCode\":\"MENTOR-MODULE-B-02R\"},{\"masterProductCode\":\"MENTOR-MODULE-DYK-36Q\"},{\"masterProductCode\":\"MENTOR-MODULE-DYK-44Q\"},{\"masterProductCode\":\"MENTOR-MODULE-DYK-23\"},{\"masterProductCode\":\"MENTOR-MODULE-C-04\"},{\"masterProductCode\":\"MENTOR-MODULE-C-03\"},{\"masterProductCode\":\"MENTOR-MODULE-AC-01\"},{\"masterProductCode\":\"MENTOR-MODULE-C-03R\"},{\"masterProductCode\":\"MENTOR-MODULE-DYK-40Q\"},{\"masterProductCode\":\"MENTOR-MODULE-AC-02\"},{\"masterProductCode\":\"MENTOR-MODULE-DYK-33Q\"},{\"masterProductCode\":\"MENTOR-MODULE-DYK-40\"},{\"masterProductCode\":\"MENTOR-MODULE-C-04R\"},{\"masterProductCode\":\"MENTOR-MODULE-DYK-33\"},{\"masterProductCode\":\"MENTOR-MODULE-DD-02\"},{\"masterProductCode\":\"MENTOR-MODULE-AD-01\"},{\"masterProductCode\":\"MENTOR-MODULE-DYK-05\"},{\"masterProductCode\":\"MENTOR-MODULE-RCCH-03A\"},{\"masterProductCode\":\"MENTOR-MODULE-DD-05R\"},{\"masterProductCode\":\"MENTOR-MODULE-DYK-20\"},{\"masterProductCode\":\"MENTOR-MODULE-EDS-41A\"},{\"masterProductCode\":\"MENTOR-MODULE-DYK-20Q\"},{\"masterProductCode\":\"MENTOR-MODULE-DD-06\"},{\"masterProductCode\":\"MENTOR-MODULE-AD-02\"},{\"masterProductCode\":\"MENTOR-MODULE-DYK-29Q\"},{\"masterProductCode\":\"MENTOR-MODULE-DD-02R\"},{\"masterProductCode\":\"MENTOR-MODULE-DYK-29\"},{\"masterProductCode\":\"MENTOR-MODULE-DD-05\"},{\"masterProductCode\":\"MENTOR-MODULE-DYK-02\"},{\"masterProductCode\":\"MENTOR-MODULE-DD-08\"},{\"masterProductCode\":\"MENTOR-MODULE-DYK-17\"},{\"masterProductCode\":\"MENTOR-MODULE-DD-06R\"},{\"masterProductCode\":\"MENTOR-MODULE-DYK-03\"},{\"masterProductCode\":\"MENTOR-MODULE-DYK-17Q\"},{\"masterProductCode\":\"MENTOR-MODULE-DD-08R\"},{\"masterProductCode\":\"MENTOR-MODULE-DYK-03Q\"},{\"masterProductCode\":\"MENTOR-MODULE-DD-03\"},{\"masterProductCode\":\"MENTOR-MODULE-DYK-05Q\"},{\"masterProductCode\":\"MENTOR-MODULE-DYK-16\"},{\"masterProductCode\":\"MENTOR-MODULE-S-01\"},{\"masterProductCode\":\"MENTOR-MODULE-AS-01\"},{\"masterProductCode\":\"MENTOR-MODULE-RCCH-04B\"},{\"masterProductCode\":\"MENTOR-MODULE-AS-02\"},{\"masterProductCode\":\"MENTOR-MODULE-S-01R\"},{\"masterProductCode\":\"MENTOR-MODULE-DYK-21\"},{\"masterProductCode\":\"MENTOR-MODULE-AS-03\"},{\"masterProductCode\":\"MENTOR-MODULE-DYK-35\"},{\"masterProductCode\":\"MENTOR-MODULE-DYK-25\"},{\"masterProductCode\":\"MENTOR-MODULE-DYK-21Q\"},{\"masterProductCode\":\"MENTOR-MODULE-EDS-26A\"},{\"masterProductCode\":\"MENTOR-MODULE-DYK-35Q\"},{\"masterProductCode\":\"MENTOR-MODULE-AS-04\"},{\"masterProductCode\":\"MENTOR-MODULE-DYK-25Q\"},{\"masterProductCode\":\"MENTOR-MODULE-EDS-48H\"},{\"masterProductCode\":\"MENTOR-MODULE-SC-03\"},{\"masterProductCode\":\"MENTOR-MODULE-DYK-19Q\"},{\"masterProductCode\":\"MENTOR-MODULE-SC-09R\"},{\"masterProductCode\":\"MENTOR-MODULE-DYK-39\"},{\"masterProductCode\":\"MENTOR-MODULE-EDS-19B\"},{\"masterProductCode\":\"MENTOR-MODULE-DYK-01Q\"},{\"masterProductCode\":\"MENTOR-MODULE-SC-01R\"},{\"masterProductCode\":\"MENTOR-MODULE-DYK-26\"},{\"masterProductCode\":\"MENTOR-MODULE-EDS-21A\"},{\"masterProductCode\":\"MENTOR-MODULE-RCCH-06A\"},{\"masterProductCode\":\"MENTOR-MODULE-DYK-28Q\"},{\"masterProductCode\":\"MENTOR-MODULE-DD-00\"},{\"masterProductCode\":\"MENTOR-MODULE-DYK-16Q\"},{\"masterProductCode\":\"MENTOR-MODULE-DYK-09\"},{\"masterProductCode\":\"MENTOR-MODULE-D-17\"},{\"masterProductCode\":\"MENTOR-MODULE-DYK-11Q\"},{\"masterProductCode\":\"MENTOR-MODULE-D-07CR\"},{\"masterProductCode\":\"MENTOR-MODULE-DYK-08Q\"},{\"masterProductCode\":\"MENTOR-MODULE-RCCH-05B\"},{\"masterProductCode\":\"MENTOR-MODULE-DYK-26Q\"},{\"masterProductCode\":\"MENTOR-MODULE-DD-00R\"},{\"masterProductCode\":\"MENTOR-MODULE-DYK-04Q\"},{\"masterProductCode\":\"MENTOR-MODULE-EDS-26B\"},{\"masterProductCode\":\"MENTOR-MODULE-DYK-28\"},{\"masterProductCode\":\"MENTOR-MODULE-DYK-13Q\"},{\"masterProductCode\":\"MENTOR-MODULE-EDS-48F\"},{\"masterProductCode\":\"MENTOR-MODULE-DYK-07Q\"},{\"masterProductCode\":\"MENTOR-MODULE-EDS-48G\"},{\"masterProductCode\":\"MENTOR-MODULE-DYK-11\"},{\"masterProductCode\":\"MENTOR-MODULE-DYK-10Q\"},{\"masterProductCode\":\"MENTOR-MODULE-EDS-48C\"},{\"masterProductCode\":\"MENTOR-MODULE-DYK-06Q\"},{\"masterProductCode\":\"MENTOR-MODULE-DYK-07\"},{\"masterProductCode\":\"MENTOR-MODULE-DYK-42Q\"},{\"masterProductCode\":\"MENTOR-MODULE-DYK-12\"},{\"masterProductCode\":\"MENTOR-MODULE-DYK-06\"},{\"masterProductCode\":\"MENTOR-MODULE-DYK-24\"},{\"masterProductCode\":\"MENTOR-MODULE-DYK-37\"},{\"masterProductCode\":\"MENTOR-MODULE-DYK-38\"},{\"masterProductCode\":\"MENTOR-MODULE-DYK-43Q\"},{\"masterProductCode\":\"MENTOR-MODULE-DYK-19\"},{\"masterProductCode\":\"MENTOR-MODULE-DYK-22Q\"},{\"masterProductCode\":\"MENTOR-MODULE-DYK-43\"},{\"masterProductCode\":\"MENTOR-MODULE-DYK-27Q\"},{\"masterProductCode\":\"MENTOR-MODULE-RC-01\",\"order\":1,\"repeat\":0},{\"masterProductCode\":\"MENTOR-MODULE-D-01\",\"order\":2},{\"masterProductCode\":\"MENTOR-MODULE-RC-02\",\"order\":3,\"repeat\":0},{\"masterProductCode\":\"MENTOR-MODULE-EDS-32\",\"order\":4},{\"masterProductCode\":\"MENTOR-MODULE-RC-03\",\"order\":5,\"repeat\":0},{\"masterProductCode\":\"MENTOR-MODULE-SC-02\",\"order\":6},{\"masterProductCode\":\"MENTOR-MODULE-RC-04\",\"order\":7,\"repeat\":0},{\"masterProductCode\":\"MENTOR-MODULE-RCCH-04A\",\"order\":8},{\"masterProductCode\":\"MENTOR-MODULE-RC-05\",\"order\":9,\"repeat\":0},{\"masterProductCode\":\"MENTOR-MODULE-SC-09\",\"order\":10},{\"masterProductCode\":\"MENTOR-MODULE-RC-06\",\"order\":11,\"repeat\":0},{\"masterProductCode\":\"MENTOR-MODULE-EDS-20\",\"order\":12},{\"masterProductCode\":\"MENTOR-MODULE-RC-15B\",\"order\":13,\"repeat\":0},{\"masterProductCode\":\"MENTOR-MODULE-RCCH-03B\",\"order\":14},{\"masterProductCode\":\"RISKCOACH-MODULE-RC-14\",\"order\":15},{\"masterProductCode\":\"MENTOR-MODULE-EDS-21B\",\"order\":16},{\"masterProductCode\":\"RISKCOACH-MODULE-RC-32\",\"order\":17},{\"masterProductCode\":\"MENTOR-MODULE-RCCH-01A\",\"order\":18},{\"masterProductCode\":\"RISKCOACH-MODULE-RC-20\",\"order\":19},{\"masterProductCode\":\"MENTOR-MODULE-SC-01\",\"order\":20},{\"masterProductCode\":\"RISKCOACH-MODULE-RC-18\",\"order\":21},{\"masterProductCode\":\"MENTOR-MODULE-EDS-18\",\"order\":22},{\"masterProductCode\":\"RISKCOACH-MODULE-RC-21\",\"order\":23},{\"masterProductCode\":\"MENTOR-MODULE-D-17R\",\"order\":24},{\"masterProductCode\":\"RISKCOACH-MODULE-RC-35\",\"order\":25},{\"masterProductCode\":\"MENTOR-MODULE-RCCH-02B\",\"order\":26},{\"masterProductCode\":\"RISKCOACH-MODULE-RC-28\",\"order\":27},{\"masterProductCode\":\"MENTOR-MODULE-EDS-41B\",\"order\":28},{\"masterProductCode\":\"RISKCOACH-MODULE-RC-27\",\"order\":29},{\"masterProductCode\":\"MENTOR-MODULE-D-16\",\"order\":30},{\"masterProductCode\":\"RISKCOACH-MODULE-RC-37\",\"order\":31},{\"masterProductCode\":\"MENTOR-MODULE-EDS-19A\",\"order\":32},{\"masterProductCode\":\"RISKCOACH-MODULE-RC-19\",\"order\":33},{\"masterProductCode\":\"MENTOR-MODULE-D-07A\",\"order\":34},{\"masterProductCode\":\"RISKCOACH-MODULE-RC-38\",\"order\":35},{\"masterProductCode\":\"MENTOR-MODULE-D-05C\",\"order\":36},{\"masterProductCode\":\"MENTOR-MODULE-SC-05\",\"order\":38},{\"masterProductCode\":\"MENTOR-MODULE-RCCH-15BA\",\"order\":40},{\"masterProductCode\":\"MENTOR-MODULE-DYK-18Q\",\"order\":42},{\"masterProductCode\":\"MENTOR-MODULE-SC-02R\",\"order\":44},{\"masterProductCode\":\"MENTOR-MODULE-EDS-46B\",\"order\":46},{\"masterProductCode\":\"MENTOR-MODULE-SC-03R\",\"order\":48},{\"masterProductCode\":\"MENTOR-MODULE-DYK-18\",\"order\":50},{\"masterProductCode\":\"RISKCOACH-MODULE-RC-41\",\"order\":51},{\"masterProductCode\":\"MENTOR-MODULE-DYK-30\",\"order\":52},{\"masterProductCode\":\"RISKCOACH-MODULE-RC-26\",\"order\":53},{\"masterProductCode\":\"MENTOR-MODULE-DYK-44\",\"order\":54},{\"masterProductCode\":\"MENTOR-MODULE-RCCH-01B\",\"order\":56},{\"masterProductCode\":\"RISKCOACH-MODULE-RC-46\",\"order\":58},{\"masterProductCode\":\"MENTOR-MODULE-EDS-26C\",\"order\":59},{\"masterProductCode\":\"RISKCOACH-MODULE-RC-09\",\"order\":60},{\"masterProductCode\":\"MENTOR-MODULE-SC-05R\",\"order\":61},{\"masterProductCode\":\"MENTOR-MODULE-DYK-02Q\",\"order\":63},{\"masterProductCode\":\"RISKCOACH-MODULE-RC-08\",\"order\":64},{\"masterProductCode\":\"MENTOR-MODULE-D-09\",\"order\":65},{\"masterProductCode\":\"RISKCOACH-MODULE-RC-36\",\"order\":66},{\"masterProductCode\":\"MENTOR-MODULE-EDS-37B\",\"order\":69},{\"masterProductCode\":\"RISKCOACH-MODULE-RC-48\",\"order\":70},{\"masterProductCode\":\"MENTOR-MODULE-D-07C\",\"order\":71},{\"masterProductCode\":\"RISKCOACH-MODULE-RC-54\",\"order\":72},{\"masterProductCode\":\"MENTOR-MODULE-DYK-09Q\",\"order\":73},{\"masterProductCode\":\"MENTOR-MODULE-D-05A\",\"order\":75},{\"masterProductCode\":\"MENTOR-MODULE-DD-04\",\"order\":77},{\"masterProductCode\":\"MENTOR-MODULE-EDS-48A\",\"order\":78},{\"masterProductCode\":\"MENTOR-MODULE-DYK-31Q\",\"order\":80},{\"masterProductCode\":\"MENTOR-MODULE-D-01R\",\"order\":81},{\"masterProductCode\":\"MENTOR-MODULE-EDS-48B\",\"order\":83},{\"masterProductCode\":\"MENTOR-MODULE-DYK-31\",\"order\":86},{\"masterProductCode\":\"MENTOR-MODULE-RCCH-15BB\",\"order\":87},{\"masterProductCode\":\"MENTOR-MODULE-D-05CR\",\"order\":91},{\"masterProductCode\":\"MENTOR-MODULE-EDS-26D\",\"order\":92},{\"masterProductCode\":\"RISKCOACH-MODULE-RC-56\",\"order\":93},{\"masterProductCode\":\"MENTOR-MODULE-D-14R\",\"order\":94},{\"masterProductCode\":\"MENTOR-MODULE-RCCH-05A\",\"order\":95},{\"masterProductCode\":\"RISKCOACH-MODULE-RC-60\",\"order\":96},{\"masterProductCode\":\"MENTOR-MODULE-EDS-48I\",\"order\":98},{\"masterProductCode\":\"MENTOR-MODULE-RCCH-06B\",\"order\":100},{\"masterProductCode\":\"RISKCOACH-MODULE-RC-57\",\"order\":102},{\"masterProductCode\":\"MENTOR-MODULE-DYK-30Q\",\"order\":103},{\"masterProductCode\":\"MENTOR-MODULE-DD2W-01\",\"order\":2},{\"masterProductCode\":\"MENTOR-MODULE-DD2W-02\",\"order\":10},{\"masterProductCode\":\"RISKCOACH-MODULE-RC-072W\",\"order\":15,\"repeat\":0},{\"masterProductCode\":\"MENTOR-MODULE-DD2W-03\",\"order\":16},{\"masterProductCode\":\"RISKCOACH-MODULE-RC-142W\",\"order\":17,\"repeat\":0},{\"masterProductCode\":\"MENTOR-MODULE-DD2W-04\",\"order\":20},{\"masterProductCode\":\"RISKCOACH-MODULE-RC-202W\",\"order\":21,\"repeat\":0},{\"masterProductCode\":\"RISKCOACH-MODULE-RC-212W\",\"order\":23,\"repeat\":0},{\"masterProductCode\":\"MENTOR-MODULE-DD2W-05\",\"order\":24},{\"masterProductCode\":\"RISKCOACH-MODULE-RC-492W\",\"order\":25,\"repeat\":0},{\"masterProductCode\":\"MENTOR-MODULE-DD2W-06\",\"order\":30},{\"masterProductCode\":\"MENTOR-MODULE-DD2W-07\",\"order\":34},{\"masterProductCode\":\"MENTOR-MODULE-DD2W-08\",\"order\":36},{\"masterProductCode\":\"MENTOR-MODULE-DD2W-09\",\"order\":46},{\"masterProductCode\":\"MENTOR-MODULE-DD2W-10\",\"order\":52},{\"masterProductCode\":\"MENTOR-MODULE-DD2W-11\",\"order\":55},{\"masterProductCode\":\"MENTOR-MODULE-DD2W-12\",\"order\":58},{\"masterProductCode\":\"ROADRISK-MODULE-RR-11\",\"order\":3},{\"masterProductCode\":\"MENTOR-MODULE-CBA-01\"},{\"masterProductCode\":\"MENTOR-MODULE-CBA-02\"}]}"