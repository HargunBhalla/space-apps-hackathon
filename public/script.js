$(document).ready(function() {

    let modal = document.querySelector(".modal");

    $('#sleep').click(function(){
        showModal('Time to go to sleep!<br><br>We have a long day ahead of us aboard the International Space Station!');
    })

    $('#water').click(function(){
        showModal('Be sure to drink water, right now!');
    })

    $('#iron').click(function(){
        let activityCheck = `<div>
        <p>Did you undergo any strenuous physical activity or exertion in the past 60 minutes?</p>
        <button id="activity-yes" class="button black">Yes</button>
        <button id="activity-no" class="button black">No</button>
        </div>
        `
        showModal(activityCheck);
    })
    
    $('body').on('click', '#activity-yes', function () {
        showModal('Monitoring vitals.<br>No action required.');
    });

    $('body').on('click', '#activity-no', function () {
        showModal('Low quantity of iron detected. Administering treatment.');
    });

    $('.close-button').click(function(){
        closeModal();
    })

    function showModal(text) {
        $('.modal-text').html(text);
        modal.classList.add("show-modal");
    }

    function closeModal(text) {
        $('.modal-text').html('');
        modal.classList.remove("show-modal");
    }
});