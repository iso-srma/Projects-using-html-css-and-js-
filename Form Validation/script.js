
    function data() {
        var a = document.getElementById("n1").value;
        var b = document.getElementById("n2").value.;
        var c = document.getElementById("n3").value;
        var d = document.getElementById("n4").value;
        
        // Check if any field is empty
        if (a === "" || b === "" || c === "" || d === "") {
            alert("All fields are mandatory");
            return false;
        }
        
        // Check if contact number is exactly 10 digits
        if (b.length !== 10 || isNaN(Number(b))) {
            alert("Number should be exactly 10 digits and contain only numbers.");
            return false;
        }
        
        // Check if passwords match
        if (c !== d) {
            alert("Passwords do not match. Please enter the same password.");
            return false;
        }

        return true; // Form will be submitted
    }
