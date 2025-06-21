document.addEventListener('DOMContentLoaded', function() {
  // Bottom Sheet Elements
  const sheet = document.getElementById('bottomSheet');
  const overlay = document.getElementById('overlay');
  const header = document.getElementById('sheetHeader');
  const openBtn = document.getElementById('openSheetBtn');
  const closeBtn = document.getElementById('closeSheetBtn');

  // Typed.js Initialization
  const typed = new Typed('.typing', {
    strings: [
      "আপনার সহায়তা ফিরিয়ে দিতে পারে কারো সন্তান, বাবা/মা বা ভাইকে!", 
      "নিখোঁজদের খুঁজে পেতে একটি মানবিক প্ল্যাটফর্ম; খুঁজি!", 
      " “হারিয়ে যাওয়া নয়, আমরা ফিরে পাওয়ার গল্প লিখি” ",
      "A Nonprofit organization",
      "A humanitarian platform to find the missing.",
      "Your support can help bring back someone's child, parent, or sibling! __#Khuji"
    ],
    loop: true,
    typeSpeed: 65,
    backSpeed: 65,
    backDelay: 1500,
    showCursor: true,
    cursorChar: '|'
  });

  // Bottom Sheet Functions
  function openSheet() {
    sheet.classList.add('active');
    overlay.classList.add('active');
    sheet.style.height = '40vh';
  }

  function closeSheet() {
    sheet.classList.remove('active');
    overlay.classList.remove('active');
  }

  // Event Listeners
  openBtn.addEventListener('click', openSheet);
  closeBtn.addEventListener('click', closeSheet);
  overlay.addEventListener('click', closeSheet);

  // Resize Functionality Variables
  let startY = 0, startHeight = 0, isResizing = false;

  // Resize Event Listeners
  header.addEventListener('mousedown', startResize);
  document.addEventListener('mousemove', resizeSheet);
  document.addEventListener('mouseup', stopResize);
  header.addEventListener('touchstart', startResize);
  document.addEventListener('touchmove', resizeSheet);
  document.addEventListener('touchend', stopResize);

  // Resize Functions
  function startResize(e) {
    isResizing = true;
    startY = e.clientY || e.touches[0].clientY;
    startHeight = parseInt(document.defaultView.getComputedStyle(sheet).height, 10);
    e.preventDefault();
  }

  function resizeSheet(e) {
    if (!isResizing) return;
    
    const currentY = e.clientY || e.touches[0].clientY;
    const deltaY = startY - currentY;
    let newHeight = startHeight + deltaY;
    
    newHeight = Math.max(
      150,
      Math.min(
        newHeight,
        window.innerHeight * 0.9
      )
    );
    
    sheet.style.height = `${newHeight}px`;
  }

  function stopResize() {
    isResizing = false;
  }
});