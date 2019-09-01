//HelperClass
//by Dominic Beckbauer
//Version: 0.01
//Status: In Development 
var c = {
    m: "noInit",
 
    getBody: function() {
         return String(this.m.getBody( new java.lang.String().getClass()));
    },
    
    getHeader: function(name) {
        return String(this.m.getHeaders().get(name));
    },
    
    getProperty: function(name) {
        return String(this.m.getProperties().get(name));
    },
    
    setProperty: function(name,value) {
        this.m.setProperty(name);
    
    },
  
    setHeader: function(name,value) {
        this.m.setHeader(name);
    },
    
    setBody: function(text) {
        this.m.setBody(String(text));
        return text;
    },
    
    init: function(message,environment) {
        this.m = message;
        this.e = environment;
    }
  };
