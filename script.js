let setSearchEngine = function() {
    let selectedEngine = document.querySelector("input[name=engine]:checked").value; 
    
    let actions = {
        "google": "https://www.google.com/",
        "duckduckgo": "https://www.duckduckgo.com",
        "bing": "https://www.bing.com",
        "ask": "https://www.ask.com"
    };
    document.getElementById("searchForm").setAttribute("action", actions[selectedEngine]);
    
};

window.addEventListener("load", function(){ 
    alert("load successful");
    
    document.getElementById("searchForm").addEventListener("submit", function(event) {
        if (document.querySelector("input[name=engine]:checked") === null) {
            alert("Select Search Engine");
            event.preventDefault();
        }
        if (document.querySelector("input[name=q]").value === ""){
            alert("Enter Search Text");
            event.preventDefault();
        }
        setSearchEngine();
    });
        
        
});