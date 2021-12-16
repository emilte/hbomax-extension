// Made sure this also works with setting
// the cursor in a css class by nulling
// the cursor in the style when active

// you can set the element to document.body
// to activate on the entire document
startInactivityCheck(
    document.querySelector('body'),
    3000,
    (element) => element.style.cursor = 'none',
    (element) => element.style.cursor = null
);
  
function startInactivityCheck(element, delay, callbackInactivity, callbackActive) {
    let timeoutId;

    setupTimers();

    function setupTimers () {
        element.addEventListener("mousemove", resetTimer, false);
        element.addEventListener("mousedown", resetTimer, false);
        element.addEventListener("keypress", resetTimer, false);
        element.addEventListener("touchmove", resetTimer, false);

        startTimer();
    }

    function startTimer() { 
        timeoutId = setTimeout(() => callbackInactivity(element), delay);
    }

    function resetTimer() {
        callbackActive(element);
        clearTimeout(timeoutId);
        startTimer();
    }
}