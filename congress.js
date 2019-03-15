const davidson = {
    platform : [
        "Taxes", "Jobs", "infrastructure", "Healthcare", "Crime and enforcement"
    ],
    Url : ["www.jobs.com"],
    calender: [],
    volunteerInfo : {
        name: "dek",
        Address: "1047 glastonbury road",
        Email: "dek.haji@email.com",
        PhoneNumber: '615-871-3634',
        Availability: "anytime",
        Activity: "answering phones"
    },
    Biogrophy: "born and raised in davidson county nashville tennessee state",
    galery: {
        Headshot: "test",
        familyPic: "test",
        constituentsPic: "test",
    },
    statement: "make nashville great again",
    registerURL: "www.goVote.com"
}
console.log(davidson.platform[1])
console.log(davidson.galery)




function addToImageGallery (newImage) {
    davidson.galery.push(newImage)
}



