function AppViewModel() {
    var self = this
    self.now = ko.observable(dayjs())
    self.issueDT = ko.computed(function() {
        return self.now().format('MMM DD, YYYY, HH:mm')
    })

    self.length = ko.observable("4hr")


    self.expireDT = ko.computed(function() {
        var increment = self.length() == '4hr' ? 4 : 12 
        return 'Please return cooler by ' + self.now().add(increment, 'hour').format('MMM DD, YYYY, HH:mm (A)')
    })


}

// Activates knockout.js
ko.applyBindings(new AppViewModel());