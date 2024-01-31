//return smaller string

const getsSmaller = function(str1, str2) {
    const getsSmaller = function(str1, str2) {
        if (str2.length < str1.length) {
            return str2
        } else if (str1.length < str2.length) {
            return str1
        } else {
            return [str1, str2]
        }
    } 
    
    getsSmaller("dogs", "cats")
} 

getsSmaller("dogs", "cats")