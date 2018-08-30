! function() {
    ! function t() {
        try {
            ! function c(t) {
                (1 !== ("" + t / t).length || t % 20 === 0) && function() {}
                .constructor("debugger")(),
                    c(++t)
            }(0)
        } catch (n) {
            setTimeout(t, 1e3)
        }
    }()
}();