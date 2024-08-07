const statusHideBtn = document.getElementById('status-hide');
const showSideBtn = document.querySelector('button.menu-btn');
const statusContent = document.querySelector('.footer .status .content');
const sidebar = document.querySelector('.sidebar');

const dashboardWelcome = document.querySelector('.main .welcome-selayang');

const titleMatter = document.getElementById('titleMatter');
const descriptionMatter = document.getElementById('descriptionMatter');
const confirmMatter = document.getElementById('confirmMatter');

if (statusContent) {
    statusHideBtn.addEventListener('click', () => {
        statusContent.classList.toggle('active');
        statusHideBtn.classList.toggle('active');
        statusIsHide = true
    });
}

setInterval(() => {
    const date = new Date();
    document.getElementById('timestamp').innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    document.getElementById('date').innerHTML = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
}, 1000);

if (titleMatter && descriptionMatter) {
    titleMatter.disabled = true;
    descriptionMatter.disabled = true;
    confirmMatter.disabled = true;
}

const grades = document.getElementsByName('grade');
const majors = document.querySelectorAll('.major button');

if (grades) {
    let classes = {
        class: '',
        grade: ''
    };

    let button = null;
    majors.forEach((major) => {
        major.addEventListener("click", () => {
            classes.class = major.value;
            if (!button) button = major.value;
            if (button != major.value) {
                document.getElementById(button).removeAttribute('class');
                button = major.value;
            }
            major.classList.contains('active') ? major.removeAttribute('class') : major.classList.add('active');
            classOption(classes);
        })
    });
    grades.forEach(grade => {
        grade.addEventListener('click', async () => {
            classes.grade = grade.value;

            classOption(classes);
        })
    })
}

async function classOption(classes) {
    if (!classes.grade) return;
    const classesOption = await siprenApi('/api/classes', "POST", classes);

    document.getElementById('classes-select').options.length = 0;
    classesOption.classes.forEach(major => {
        let option = document.createElement('option');
        option.innerHTML = major.nama_kelas;
        option.value = major.id;
        document.getElementById('classes-select').append(option);
    });
}

selectById('produktif')?.addEventListener('click', async () => {
    const produktif = await siprenApi('/api/subjects', "POST", {
        class_id: selectById('classes-select').value
    });

    produktif.subjects.productives.forEach(subject => {
        let option = document.createElement('option');
        option.innerHTML = subject.toUpperCase();
        option.value = subject;
        selectById('subjects-select').append(option)
    })
});

selectById('normada')?.addEventListener('click', async () => {
    const normada = await siprenApi('/api/subjects', "POST", {
        class_id: selectById('classes-select').value
    });

    normada.subjects.normada.forEach(subject => {
        let option = document.createElement('option');
        option.innerHTML = subject.toUpperCase();
        option.value = subject;
        selectById('subjects-select').append(option);
    })
});

selectById('menu-confirm').addEventListener('click', () => {
    if (selectById('subjects-select').value) {
        titleMatter.disabled = false;
        descriptionMatter.disabled = false;
        confirmMatter.disabled = false;
        selectById('menu_dialog').close()
    }
})

selectById('confirmMatter')?.addEventListener('click', () => {
    selectById('materi-form-name').value = selectById('titleMatter').value;
    selectById('materi-form-description').value = selectById('descriptionMatter').value;
    selectById('materi-form-kelas').value = selectById('classes-select').value;

    selectById('materi-form').submit();
})

document.addEventListener('keydown', (e) => {
    if (!isNaN(e.key)) {
        selectById('proses_presensi').showModal();
        if (selectById('rfid-input').value.length >= 10) return
        selectById('rfid-input').value += e.key;
        if (selectById('rfid-input').value >= 10) {
            selectById(`presensi-form`).submit()
        }
    }
})

document.addEventListener('DOMContentLoaded', (e) => {
    if (errorModal) selectById('error_presensi').showModal()
    setTimeout(() => selectById('error_presensi').close(), 3000)
})

// function menuConfirm(){
//     if()
// selectById('menu_dialog').close()
// }