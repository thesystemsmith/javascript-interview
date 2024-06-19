// reverse a string
function reverseString(str){
    return str.split('').reverse().join('')
}
console.log(reverseString('hello')) // olleh

// palindrome
function isPalindrome(str){
    const reversed = str.split('').reverse().join('')
    return str === reversed
}
console.log(isPalindrome('racecar')) // true

// first non repeated character
function firstNonRepeatedChar(str) {
    const count = []

    for(const char of str){
        count[char] = (count[char] || 0) + 1
    }

    for(const char of str){
        if(count[char] === 1){
            return char
        }
    }
    return null
}
console.log(firstNonRepeatedChar("programming"));  // Output: "p"

//Implement a Queue using Two Stacks
class QueueWithTwoStacks{
    constructor(){
        this.stack1 = []
        this.stack2 = []
    }

    enqueue(item){
        this.stack1.push(item)
    }

    dequeue(){ //pop costly
        if(this.stack2.length === 0){
            while(this.stack1.length > 0){
                this.stack2.push(this.stack1.pop())
            }
        }
        return this.stack2.pop()
    }
}

const queue = new QueueWithTwoStacks();
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue());  // Output: 1

// Implement a Stack using Two Queues
class StackWithTwoQueues{
    constructor(){
        this.queue1 = []
        this.queue2 = []
    }

    push(item){ //push costly 
        this.queue2.enqueue(item)
        while(this.queue1.length > 0){
            this.queue2.enqueue(this.queue1.pop())
        }
    }

    pop(){
        return this.queue1.dequeue()
    }
}

//valid parenthesis
function isValidParentheses(str){
    const stack = []
    const pairs = { '(': ')', '{': '}', '[': ']' }

    for(const char of str){
        if(char in pairs){
            stack.push(char)
        }else if(pairs[stack.pop] !== char){
            return false
        }
    }
    return stack.length === 0
}

console.log(isValidParentheses("{[()]}"));  // Output: true


// cycle detection
function hasCycle(head){
    let slow = head
    let fast = head

    while(fast && fast.next){
        slow = slow.next
        fast = fast.next.next
        if(slow === fast){
            return true
        }
    }
    return false
}