let documentFile = document;


const tabs = documentFile.querySelectorAll(".tab")
const tabContents = documentFile.querySelectorAll(".tab-content")

tabs.forEach(tab => {
    tab.addEventListener("click",() =>{
        const target = documentFile.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent =>{
            tabContent.classList.remove("active")
        })
        tabs.forEach(item =>{
            item.classList.remove("active")
        })

        tab.classList.add("active")
        target.classList.add("active")
    })
});

// Highchart
documentFile.addEventListener("DOMContentLoaded",() =>{
    Highcharts.setOptions({
        chart:{
            style:{
                fontFamily:'inherit',
                font:"2rem"
            }
        }
    })


    Highcharts.chart('highchart',{
        xAxis:{
            categories:['Apples','Banana','Orange'],
            labels:{
                style:{
                    color:'#ffa31a',
                    fontSize:'2rem',
                }
            }
        },
        series:[{
            name:'John',
            data:[1,3,4],
            
        }]
    })
})

// Highchart buttons

const highchartBtns = documentFile.querySelectorAll(".chart-btn")
highchartBtns.forEach(btn =>{
    
    btn.addEventListener("click", ()=>{

        highchartBtns.forEach(item =>{
            item.classList.remove("active")
        })
        
        btn.classList.add("active")
    })
})

// VIDEO TAB SECTION
// video tag toggle
const videoTags = documentFile.querySelectorAll(".video-tag")
videoTags.forEach(tag =>{
    tag.addEventListener("click",() =>{
        videoTags.forEach(item =>{
            item.classList.remove("active")
        })
        tag.classList.add("active")
    })
})

// video model
const videoModel = documentFile.querySelector(".video-player-model")
const videolModelClose = documentFile.querySelector(".video-player-close")
const videoCard = documentFile.querySelectorAll(".video-card")

// populate the video model
const videoCardSrc = documentFile.querySelector(".video-card  video source").getAttribute("src")
const videoCardComment = documentFile.querySelector(".card-content-links .link.comments span").innerText
const videoCardlike = documentFile.querySelector(".card-content-links .link.likes span").innerText
const videoCardShare = documentFile.querySelector(".card-content-links .link.likes span").innerText

videoCard.forEach(card =>{
    card.addEventListener("click",() =>{
        videoModel.classList.add("active")
    })
})


videolModelClose.addEventListener("click",() =>{
    videoModel.classList.remove("active")
})

// add video model
const addVideoModel = documentFile.querySelector('.video-add-model')
const addVideoModelOpen = documentFile.querySelector(".video-add-button")
const addVideoModelClose = documentFile.querySelector(".video-add-close")

addVideoModelOpen.addEventListener("click",() =>{
    addVideoModel.classList.add("active")
})

addVideoModelClose.addEventListener("click",() =>{
    addVideoModel.classList.remove("active")
})

//// add tag when add tag button is pressed
const addTagInput = documentFile.querySelector(".add-tag-input")
const addTagContainer = documentFile.querySelector(".video-add-tag-list-model")
const addTagBtn = documentFile.querySelector(".add-tag-button")

addTagBtn.addEventListener("click",()=>{
    const ul = addTagContainer.querySelector("ul")
    const li = documentFile.createElement("li")
    if ( addTagInput.value.length >= 1 ) {
        console.log( addTagInput.value.length);
        li.innerText = "#" + addTagInput.value   
        addTagInput.value = ""
        ul.appendChild(li)
    }
})

// ACCOUNT TAB SECTION
// toggle detail edit toggle
const editDetailModel = documentFile.querySelector(".account-edit-model")
const editDetailModelOpen = documentFile.querySelector(".account-edit-btn")
const editDetailModelClose = documentFile.querySelector(".account-model-close")

editDetailModelOpen.addEventListener("click",()=>{
    editDetailModel.classList.add("active")
})

editDetailModelClose.addEventListener("click",()=>{
    editDetailModel.classList.remove("active")
})

///ADDS TAB SECTION
const addAdsModel = documentFile.querySelector(".ads-model-container")
const addAdsModelOpen = documentFile.querySelector(".add-add-model")
const addAdsModelClose = documentFile.querySelector(".close-ads-model")

addAdsModelOpen.addEventListener("click",()=>{
    addAdsModel.classList.add("active")
})
addAdsModelClose.addEventListener("click",()=>{
    addAdsModel.classList.remove("active")
})

// edit ads detail
const adsDetailContainer = documentFile.querySelector(".ads-card-container")
const previousCardsContent = adsDetailContainer.innerHTML;
const adsCards = documentFile.querySelectorAll(".ads-card")

// let adsbackHomeBtn;

adsCards.forEach(card =>{
    card.addEventListener("click",()=>{

        console.log("shit");

        const cardImage = card.querySelector(".ads-card-image > img").src;
        const cardTitle = card.querySelector(".ads-title").innerText;
        const cardCompany = card.querySelector(".ads-company").innerText;
        const cardDescription = card.querySelector(".ads-description").innerText;

        const adsDetail = documentFile.createElement("div")
        adsDetail.classList.add("ads-detail-container")
        adsDetail.innerHTML = `
            <h2>Ads details</h2>
            <div class="ads-control">
                <p>Ads Image</p>
                <div class="ads-control-image">
                    <img src="${cardImage}" alt="">
                </div>
            </div>
            <div class="ads-control">
                <p>Titles</p>
                <div class="ads-title">${cardTitle}</div>
            </div>
                <div class="ads-control">
                <p>Company Name</p>
                <div class="ads-company-name">${cardCompany}</div>
            </div>
            <div class="ads-control">
                <p>Description</p>
                <div class="ads-description">${cardDescription}</div>
            </div>
            <div class="ads-control">
                <p>Links</p>
                <div class="ads-link">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio vero aut voluptas.</div>
            </div>
            <div class="ads-edit-btn">
                <button>Edit</button>
            </div>
        `
        
        const adsHomeBtn = documentFile.createElement("div")
        adsHomeBtn.classList.add("ads-backhome-btn")
        adsHomeBtn.innerHTML = `
            <i class="fas fa-long-arrow-alt-left"></i>
        `

        adsDetailContainer.innerHTML = " ";
        adsDetailContainer.appendChild(adsDetail)
        adsDetailContainer.appendChild(adsHomeBtn)

        backHomeBtnClicked(adsHomeBtn)
        displayAdEditModel( adsDetailContainer) 
        

    })
})

// ads details go back home
function backHomeBtnClicked(adsbackHomeBtn) {
    adsbackHomeBtn.addEventListener("click",()=>{
        adsDetailContainer.innerHTML =" "
        adsDetailContainer.innerHTML += previousCardsContent
    }) 
}

///display edit model
function displayAdEditModel(button) {
    const editAdModel = documentFile.querySelector(".ads-edit-model-container")
    const closeEditModelIcon = editAdModel.querySelector(".close-ads-model")

    button.querySelector(".ads-edit-btn").addEventListener("click",()=>{
        editAdModel.classList.add("active")
    })

    closeEditModelIcon.addEventListener("click",()=>{
        editAdModel.classList.remove("active")
    })

}




