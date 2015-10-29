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
    output = []
    j = 0
    k = 0 

    # loop over the source
    while j in range(len(source)):
        k = 0
        if source[j] not in separators:
            k = j + 1
            # as long as k is not the list of separators, check for the next letter
            while k in range(len(source)) and source[k] not in separators:
                k += 1
            # when a separator is found, add the characters between the separators to the output
            output.append(source[j:k])
        # if a word was found, skip over the length of that word    
        if k > 1:
            j += len(output[-1])
        # else go to the next letter
        else:
            j += 1


    # return the outputlist   
    return output


if __name__ == '__main__':
    # You can try to run your implementation here, that will not affect the
    # automated tests.
    # should print: ['c', 'd', 'r']
    print split_string('abacadabra', 'ab')  
    # should print: ['abc']
    print split_string('abc', '')  
    # should print: ['aba', 'adaba', 'a']
    print split_string('abacadabra', 'cr')  
    # should print: ['a', 'acada']
    print split_string('abacadabra', 'b')  

