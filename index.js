// code your solution here
function saturdayFun(activity="rollercoaster") {
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(activity="go to office") {
    return `This Monday, I will ${activity}.`
}

const wrapAdjective = function(style="*") {
    return function(adjective="special") {
        return `You are ${style}${adjective}${style}!`
    }
}