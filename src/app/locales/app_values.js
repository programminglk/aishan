export default {
    game_list: ["Thesis Elements", "Game 2", "Game 3", "Game 4"],

    thesis_elements: [
        'Output',
        'Input',
        'Hypothesis',
        'Users',
        'Future work',
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
        'Process'
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
            'Output': [2, ''],
            'Curiosity': [2, ''],
            'Users': [2, ''],
            'Conclusion': [2, ''],
        },
        'Introduction': {
            'Curiosity': [2, ''],
            'Users': [2, ''],

            'Citation': [2, ''],
            'Output': [2, ''],
            'Objectives': [2, ''],
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
        }
    }
}

