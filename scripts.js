let increment = document.querySelectorAll('.time-increments button.active')[0].innerHTML.toLocaleLowerCase();
const incrementTextEnum = {
    'daily': 'Yesterday',
    'weekly': 'Last Week',
    'monthly': 'Last Month'
}

const setUserInfo = (info) => {
    const profileElement = document.getElementById('profileImg');
    profileElement.src = info.profileImg;
    profileElement.alt = info.name;
    profileElement.classList.remove('loading');

    const nameElement = document.getElementById('username');
    nameElement.innerHTML = info.name;
    nameElement.classList.remove('loading');
}

const setCardInfo = (info, increment) => {
    // get the relevent card
    const cardElement = document.getElementsByClassName(info.selector)[0];
    // Set relevent plural text
    const currentHrs = info.timeframes[increment].current > 1 ? 'hrs' : 'hr';
    const prevHrs = info.timeframes[increment].previous > 1 ? 'hrs' : 'hr';
    // Set amount of time
    cardElement.getElementsByClassName('time')[0].innerHTML = info.timeframes[increment].current + currentHrs;
    cardElement.getElementsByClassName('sub-time')[1].innerHTML = info.timeframes[increment].previous + prevHrs;
    // Set the time's descriptor
    cardElement.getElementsByClassName('sub-time')[0].innerHTML = incrementTextEnum[increment];
}

const applyUserData = () => {
    // Simulate short API delay
    // setTimeout(() => {
        userData.forEach(data => {
            if (data.title === 'User') {
                setUserInfo(data);
            } else {
                setCardInfo(data, increment);
            }
        })

    // }, Math.random() * 1000);
}

const update = (event) => {
    // Reset the current increment
    increment = event.currentTarget.innerText.toLocaleLowerCase();
    // Remove the active class from the previous button
    document.querySelectorAll('.time-increments button').forEach(btn => {
        btn.classList.remove('active');
    });
    // Add the active class to the current one
    event.currentTarget.classList.add('active');
    // Reload
    applyUserData();
}

applyUserData();