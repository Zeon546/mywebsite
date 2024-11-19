function sendMessage() {
    const messageInput = document.getElementById('message');
    const messageText = messageInput.value.trim();
    
    if (messageText === "") return; // Prevent sending empty messages
    
    const chatBox = document.getElementById('chat-box');
    
    // Create message element
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', 'sent');
    messageElement.innerText = messageText;
    
    // Append message to chat box
    chatBox.appendChild(messageElement);
    
    // Clear input field
    messageInput.value = "";
    
    // Scroll to the bottom of the chat
    chatBox.scrollTop = chatBox.scrollHeight;
    
    // Simulate receiving a reply
    setTimeout(receiveMessage, 1000);
}

function receiveMessage() {
    const chatBox = document.getElementById('chat-box');
    
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', 'received');
    messageElement.innerText = "welcome to I-Connect.";
    
    chatBox.appendChild(messageElement);
    
    chatBox.scrollTop = chatBox.scrollHeight;
}
let currentSlide = 0;

const slides = document.querySelector('.slider');
const totalSlides = document.querySelectorAll('.slide').length;

function showSlide(index) {
    if (index >= totalSlides) {
        currentSlide = 0;  // Loop back to the first slide
    } else if (index < 0) {
        currentSlide = totalSlides - 1;  // Loop to the last slide
    } else {
        currentSlide = index;
    }
    const offset = -currentSlide * 100; // Shift slides by 100% of viewport width
    slides.style.transform = `translateX(${offset}vw)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}
