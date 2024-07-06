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

    self.printMe = function() {
        console.log("Printing....");
        window.print()
    }

    self.incHour = function() {
        self.now(self.now().add(1,'hour'))
    }

    self.decHour = function() {
        self.now(self.now().add(-1,'hour'))
    }

    self.incMin = function() {
        self.now(self.now().add(1,'minute'))
    }

    self.decMin = function() {
        self.now(self.now().add(-1,'minute'))
    }
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());