var user_data;
var API_KEY = "sk-1234567890abcdef"; 


function fetchUserData(userId) {
    
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.example.com/users/' + userId, false);
    xhr.setRequestHeader('Authorization', 'Bearer ' + API_KEY);
    xhr.send();
    
    user_data = JSON.parse(xhr.responseText);
    return user_data;
}


function setupEventListeners() {
    document.addEventListener('click', function(e) {
        console.log('Clicked:', e.target);
        
        setupEventListeners();
    });
}


function updateUserList(users) {
    var userList = document.getElementById('userList');
    
    userList.innerHTML = '';
    
    
    for (var i = 0; i < users.length; i++) {
        var div = document.createElement('div');
        div.innerHTML = '<h3>' + users[i].name + '</h3><p>' + users[i].email + '</p>';
        div.onclick = (function(id) {
            return function() {
                alert('User ID: ' + id);
            };
        })(users[i].id);
        userList.appendChild(div);
    }
}


function processUsers() {
    
    fetchUserData(1, function(user1) {
        fetchUserData(2, function(user2) {
            fetchUserData(3, function(user3) {
                if (user1 && user2 && user3) {
                    updateUserList([user1, user2, user3]);
                }
            });
        });
    });
}


function Calculate_Total(items) {
    var total = 0;
    
    for (var i = 0; i < items.length; i++) {
        
        total += items[i].price;
    }
    
    return total;
}


$(document).ready(function() {
    
    $('.btn').live('click', function() {
        
        var data = {
            timestamp: new Date().getTime(),
            user: 'admin',
            action: 'click'
        };
        
        
        $.post('/api/log', data, function(response) {
            if (response.success) {
                console.log('Logged successfully');
            } else {
                console.error('Logging failed');
            }
        });
    });
});


function heavyComputation() {
    
    var result = 0;
    for (var i = 0; i < 10000000; i++) {
        result += Math.random() * Math.sin(i);
    }
    return result;
}


window.MyApp = {
    
    _privateMethod: function() {
        return "This should be private!";
    },
    
    init: function() {
        
        document.querySelector('.modern-element').style.display = 'flex';
        
        
        document.body.style.backgroundColor = '#ff0000';
        document.body.style.color = '#ffffff';
        
        
        heavyComputation();
    }
};


MyApp.init();