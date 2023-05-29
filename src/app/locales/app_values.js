export default {
    game_list: ["Thesis Elements", "Game 2", "Game 3", "Game 4"],

    thesis_elements: [
        'Algorithms',
        'Abbrevations',
        'Modules',
        'Output',
        "Others' Work",
        'Your Work',
        'Evaluation',
        'Input',
        'Hypothesis',
        'Users',
        'Future Work',
        'Features',
        'Variables',
        'Codes',
        'Solution',
        'Citation',
        'Problem',
        'Curiosity',
        'Conclusion',
        'Technology',
        'Motivation',
        'Limitations',
        'Objectives',
        'References',
        'Software',
        'Hardware',
        'Results',
        'Key Researches',
        'Process',
    ],

    thesis_element_dropzones: [
        'Abstract',
        'Introduction',
        'Literature Review',
        'Technology',
        'Approach',
        'Design',
        'Implementation',
        'Evaluation',
        'Conclusion',
    ],

    dropzone_thesis_element_scores: {
        'Abstract': {
            "Others' Work": [2,     'An Abstract must have few lines to describe what others have already done in the problem area.'],
            'Problem': [2,          'In Thesis and Reports, the the Abstract may start with the problem addressed in the research.'],
            'Your Work': [2,        'In General you can describe your work by stating on your Approach, Design, and the Implementation. The Approach can be describe with \
                                    respect to points such as users, inputs, outputs, process, and features of the solution.  You can also describe about the design by stating about \
                                    each module and what each does. Then the implementation can be described by stating about how each module was developed. If the module wise description \
                                    is difficult to do, then you can describe about the overall desgin and implementation.'],
            'Evaluation': [2,       'The abstract of completed projects must have at least few sentences on how you tested your solution. If there are any control experiments, those also \
                                    must be described.'],
            'Conclusion': [2,       'Each abstract must report on the conclussions based on the stated evaluation'],
            'Output': [1, 'When stating about the Approach under Your Work, you can state about the outputs'],
            'Input': [1, 'When stating about the Approach under Your Work, you can state about the inputs'],
            'Users': [1, 'When stating about the Approach under Your Work, you can state about the users'],
            'Process': [1, 'When stating about the Approach under Your Work, you can state about the process'],
            'Features': [1, 'When stating about the Approach under Your Work, you can state about the features'],
            'Curiosity': [1, ''],
            'Citation': [-5, 'Citations must not be included in the abstract'],
            'Abbrevations': [-5, 'Abbrevations must not be included in the abstract'],
            'Limitations': [-5, 'Limitations must not be included in the abstract'],
            'Future Work': [-5, 'Future Work must not be included in the abstract'],

        },
        'Introduction': {
            'Curiosity': [2, ''],
            'Users': [2, ''],
            'Citation': [2, ''],
            'Output': [2, ''],
            'Objectives': [2, ''],
            'Evaluation': [2, ''],
            'Conclusion': [2, ''],
        },
        'Literature Review': {
            'Citation': [2, ''],
            'Problem': [2, ''],
            'Technology': [2, ''],
            'Objectives': [2, 'First two of the objectives in any research is: 1. Doing a criticial review of the problem area. \
                                2. Reviewing the Technologies that are being used to solve the problem. Hence At the stage of litrature review, \
                                these two objectives should be covered.'], 
        }, 
        'Technology': {
            'Technology': [2, ''],
            'Citiation':  [2, ''],
        },
        'Approach': {
            'Hypothesis': [2, ''],
            'Input': [2, ''],
            'Output': [2, ''],
            'Process': [2, ''],
            'Design': [2, ''],
            'Implementation': [2, ''],
            'Evaluation': [2, ''],
            'Features': [2, ''],
            'Users': [2, ''],
        },
        'Design': {

        },
        'Implementation': {
            'Codes': [2, ''],
            'Hardware': [2, ''],
            'Software': [2, ''],
            'Algorithms': [2, ''],
        },
        'Evaluation': {
            'Output':  [2, ''],
            'Users': [2, ''],
        },
        'Conclusion': {
            'Users': [2, ''],
            'Conclusion': [2, ''],
            'Objectives': [2, ''],
            'Limitations': [2, ''],
            'Future Work': [2, ''],
        }
    }
}

