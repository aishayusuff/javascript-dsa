//Sort version string e.g. 1.0.1 < 1.3.1 and 0.11.1 > 0.1.11 and 0.0.1 < 2.0.0
 
 
interface LegalDocument { 
 
   id: string 
   version: string;  // e.g. 1.1.2 
   name: string
} 


const sortByVersion = (docs: LegalDocument []): LegalDocument[] => {
   //function should return array of objs sorted by version
   //Find a way to access the version of each obj in the array
   //version is a string, so convert to index to find which is greater
      //Version is 1.11.2 format, so split each version by string
      //then convert each string element to int
   
   //If we compare two versions, loop through the length of the resulting int array
      //check if element in current loop in one version is </> the element in the other version
         //if yes, return 1
         //else return -1
   //call sort() on docs array of objs and pass return value to it
   //return sorted docs array


   return docs.sort((v1, v2) => comparesVersions(v1, v2));
}


const comparesVersions = function(obj1, obj2) {
   const v1 = obj1.version.split(".").map(num1 => parseInt(num1))
   const v2 = obj2.version.split(".").map(num2 => parseInt(num2))

   for(let i = 0; i < Math.max(v1.length, v2.length); i++) {
      let v1Element = v1[i] || 0;
      let v2Element = v2[i] || 0;
      
      //compare
      if ( v1Element > v2Element) {
         return 1;
      } 
      if (v1Element < v2Element) {
         return -1
      }
   }

   return 0;
}