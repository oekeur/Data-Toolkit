# Name : Oscar Keur	
# Student number : 11122102
'''
This module contains an implementation of split_string.
'''

# You are not allowed to use the standard string.split() function, use of the
# regular expression module, however, is allowed.
# To test your implementation use the test-exercise.py script.

# A note about the proper programming style in Python:
#
# Python uses indentation to define blocks and thus is sensitive to the
# whitespace you use. It is convention to use 4 spaces to indent your
# code. Never, ever mix tabs and spaces - that is a source of bugs and
# failures in Python programs.


def split_string(source, separators):
    '''
    Split a string <source> on any of the characters in <separators>.

    The ouput of this function should be a list of strings split at the
    positions of each of the separator characters.
    '''
    y = 0
    separator = []
    locations = []
    output = []
    i = 0
    x = 0
    w = 0

    for y in range(len(separators)):
        separator.append(separators[y])
    for i in range(len(source)):
        if source[i] in separators:
            locations.append(i)
            print locations
            i +=1
    for x in range(len(locations)-1):
        if x < len(locations):
            output.append(source[locations[x+1]:locations[x-1]])
            print output[x]
            x += 1 
    for w in range(len(output)):
        print output[w]
        w += 1     



if __name__ == '__main__':
    # You can try to run your implementation here, that will not affect the
    # automated tests.
    # should print: ['c', 'd', 'r']
    print split_string('abacadabra', 'ba')  

