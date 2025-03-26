// Date generator (weekdays only)
// Replace the old date generation logic with:
let postDateMap = new Map();

function initializeDates() {
    const startDate = '2024-11-04';
    let current = new Date(startDate);
    let dateIndex = 0;
    
    posts.forEach(post => {
        // Skip weekends
        while (current.getDay() === 0 || current.getDay() === 6) {
            current.setDate(current.getDate() + 1);
        }
        
        postDateMap.set(post.num, new Date(current));
        current.setDate(current.getDate() + 1);
        dateIndex++;
    });
}

// Add to script.js
// =================

// CSS Class for active filters
const activeFilterClass = 'filter-active';

// Track selected tags
let selectedTags = new Set();

// Get all unique tags (main + subtags)
function getAllUniqueTags() {
    const tags = new Set();
    
    posts.forEach(post => {
        // Add main label
        tags.add(post.label);
        // Add DevOps subtags
        getAdditionalTags(post.label).forEach(t => tags.add(`#${t}`));
    });
    
    return Array.from(tags).sort();
}

// Create filter buttons
function renderTagFilters() {
    const container = document.getElementById('filterContainer');
    const tags = getAllUniqueTags();
    
    container.innerHTML = tags.map(tag => `
        <button class="tag-filter ${selectedTags.has(tag) ? activeFilterClass : ''}" 
                data-tag="${tag}">
            ${tag}
        </button>
    `).join('');

    // Add click handlers
    document.querySelectorAll('.tag-filter').forEach(button => {
        button.addEventListener('click', () => {
            const tag = button.dataset.tag;
            
            if(selectedTags.has(tag)) {
                selectedTags.delete(tag);
                button.classList.remove(activeFilterClass);
            } else {
                selectedTags.add(tag);
                button.classList.add(activeFilterClass);
            }
            
            filterPosts();
        });
    });
}

// Filter posts based on selected tags
function filterPosts() {
    const filteredPosts = posts.filter(post => {
        if(selectedTags.size === 0) return true;
        
        const postTags = [
            post.label, 
            ...getAdditionalTags(post.label).map(t => `#${t}`)
        ];
        
        return postTags.some(tag => selectedTags.has(tag));
    });

    renderPosts(filteredPosts);
}

// Update renderPosts()
function renderPosts(postsToRender) {
    const container = document.getElementById('postsContainer');
    container.innerHTML = postsToRender
        .map(post => createPostHTML(post)) // Uses mapped dates
        .join('');
}



// Modified initialization
document.addEventListener('DOMContentLoaded', () => {
    const startDate = '2024-11-04';
    postDates = generateDates(startDate, posts.length);
    
    renderTagFilters();
    filterPosts(); // Initial render
});

// Full post data from CSV
const posts = [
    {num:1, title:"What is the purpose of the H specifications in RPG II?", label:"Program Structure"},
    {num:2, title:"How are comments written in RPG II?", label:"Syntax"},
    {num:3, title:"What are the six main specification types in RPG II?", label:"Program Structure"},
    {num:4, title:"How do you define a constant in RPG II?", label:"Constants"},
    {num:5, title:"What is the significance of the F specification in RPG II?", label:"File Handling"},
    {num:6, title:"How do you declare a numeric field in RPG II?", label:"Data Types"},
    {num:7, title:"What is the default length of a packed decimal field in RPG II?", label:"Data Types"},
    {num:8, title:"How do you define an array in RPG II?", label:"Arrays"},
    {num:9, title:"What is the role of indicators in RPG II?", label:"Control Flow"},
    {num:10, title:"How are character fields defined in RPG II?", label:"Data Types"},
    {num:11, title:"How do you define an input file in the F specification?", label:"File Handling"},
    {num:12, title:"What does the 'DISK' keyword indicate in the F specification?", label:"File Handling"},
    {num:13, title:"How can you read a record from a file in RPG II?", label:"File Handling"},
    {num:14, title:"What is the purpose of the READ operation in RPG II?", label:"File Handling"},
    {num:15, title:"How do you update a record in an RPG II file?", label:"File Handling"},
    {num:16, title:"How do you perform addition in RPG II?", label:"Arithmetic Operations"},
    {num:17, title:"What does the MULT operation do in RPG II?", label:"Arithmetic Operations"},
    {num:18, title:"How can you compare two numeric values in RPG II?", label:"Comparison Operators"},
    {num:19, title:"What RPG II operation is used to branch based on a condition?", label:"Control Flow"},
    {num:20, title:"How do you define a calculation in the C specification?", label:"Calculations"},
    {num:21, title:"How do you use an indicator to conditionally execute a calculation?", label:"Control Flow"},
    {num:22, title:"What is a level break in RPG II?", label:"Control Flow"},
    {num:23, title:"How does RPG II handle loops?", label:"Loops"},
    {num:24, title:"What is the purpose of the GOTO operation?", label:"Control Flow"},
    {num:25, title:"How do you use an indicator to control program flow?", label:"Control Flow"},
    {num:26, title:"What is an externally described file in RPG II?", label:"File Handling"},
    {num:27, title:"How can you call an external program from RPG II?", label:"Program Calls"},
    {num:28, title:"How do you handle errors in RPG II?", label:"Debugging"},
    {num:29, title:"What is the difference between a primary and secondary file in RPG II?", label:"File Handling"},
    {num:30, title:"How do you define a multi-record format file in RPG II?", label:"File Handling"},
    {num:31, title:"How do you handle indexed files in RPG II?", label:"File Handling"},
    {num:32, title:"What is the significance of using a primary file vs. a secondary file?", label:"File Handling"},
    {num:33, title:"How do you process multiple record formats within a single file?", label:"File Handling"},
    {num:34, title:"What are the key considerations when updating records in a sequential file?", label:"File Handling"},
    {num:35, title:"How can you efficiently read and write from multiple files in RPG II?", label:"File Handling"},
    {num:36, title:"What challenges arise when modifying legacy RPG II programs?", label:"Legacy Maintenance"},
    {num:37, title:"How do you add new features to an old RPG II system without breaking existing logic?", label:"Legacy Maintenance"},
    {num:38, title:"What debugging techniques are available for RPG II on older hardware?", label:"Debugging"},
    {num:39, title:"How do you track and document changes in legacy RPG II codebases?", label:"Legacy Maintenance"},
    {num:40, title:"Why is technical debt a concern in RPG II systems and how can it be managed?", label:"Legacy Maintenance"},
    {num:41, title:"What strategies can you use to optimize RPG II file processing?", label:"Performance Optimization"},
    {num:42, title:"How does excessive disk I/O impact RPG II performance and how can it be mitigated?", label:"Performance Optimization"},
    {num:43, title:"What is the most efficient way to iterate through large datasets in RPG II?", label:"Performance Optimization"},
    {num:44, title:"How do you optimize numeric calculations to reduce processing time?", label:"Performance Optimization"},
    {num:45, title:"What RPG II coding practices should be avoided to maintain efficiency?", label:"Performance Optimization"},
    {num:46, title:"What are the key considerations when migrating an RPG II program to a modern RPG version?", label:"Modernization"},
    {num:47, title:"How can RPG II interact with relational databases like DB2?", label:"Modernization"},
    {num:48, title:"What are the challenges of integrating RPG II programs with web-based applications?", label:"Modernization"},
    {num:49, title:"How can you connect RPG II with modern API services?", label:"Modernization"},
    {num:50, title:"What are the potential risks and benefits of rewriting RPG II systems in modern languages?", label:"Modernization"},
    {num:51, title:"How can RPG II programs communicate with COBOL applications?", label:"Interfacing with Other Languages"},
    {num:52, title:"What role does CL (Control Language) play in managing RPG II job execution?", label:"Interfacing with Other Languages"},
    {num:53, title:"How can SQL be embedded in an RPG II program?", label:"Interfacing with Other Languages"},
    {num:54, title:"What are the advantages and challenges of integrating RPG II with Java?", label:"Interfacing with Other Languages"},
    {num:55, title:"How do you handle data exchange between RPG II and modern ERP systems?", label:"Interfacing with Other Languages"},
    {num:56, title:"What tools are available for debugging RPG II programs on AS/400 systems?", label:"Debugging"},
    {num:57, title:"How do you trace and resolve intermittent errors in RPG II batch jobs?", label:"Debugging"},
    {num:58, title:"What are common causes of infinite loops in RPG II and how do you prevent them?", label:"Debugging"},
    {num:59, title:"How do you interpret RPG II error messages effectively?", label:"Debugging"},
    {num:60, title:"What strategies can be used to test RPG II programs efficiently?", label:"Debugging"},
    {num:61, title:"How do you implement a table lookup in RPG II?", label:"Control Flow"},
    {num:62, title:"What are the best practices for handling nested conditional logic?", label:"Control Flow"},
    {num:63, title:"How do you handle exceptions and unexpected values in calculations?", label:"Control Flow"},
    {num:64, title:"What role do RPG II indicators play in structured program logic?", label:"Control Flow"},
    {num:65, title:"How can you implement error-handling routines in RPG II?", label:"Control Flow"},
    {num:66, title:"How do you efficiently merge data from multiple files in RPG II?", label:"File Handling"},
    {num:67, title:"What techniques are available for sorting records in RPG II?", label:"File Handling"},
    {num:68, title:"How do you manage concurrent file access in RPG II?", label:"File Handling"},
    {num:69, title:"What is the purpose of the EXFMT operation in RPG II?", label:"File Handling"},
    {num:70, title:"How do you implement dynamic record selection in RPG II?", label:"File Handling"},
    {num:71, title:"What are the risks of modifying large-scale RPG II systems?", label:"Large-Scale Systems"},
    {num:72, title:"How can you modularize RPG II programs for better maintainability?", label:"Large-Scale Systems"},
    {num:73, title:"What challenges arise when integrating RPG II with enterprise reporting tools?", label:"Large-Scale Systems"},
    {num:74, title:"How do you ensure data integrity in high-volume RPG II applications?", label:"Large-Scale Systems"},
    {num:75, title:"What role does batch processing play in RPG II and how can it be optimized?", label:"Large-Scale Systems"},
    {num:76, title:"How is RPG II used in financial applications?", label:"Industry-Specific Applications"},
    {num:77, title:"What are common use cases of RPG II in manufacturing systems?", label:"Industry-Specific Applications"},
    {num:78, title:"How does RPG II support inventory management applications?", label:"Industry-Specific Applications"},
    {num:79, title:"What are the limitations of RPG II in modern retail systems?", label:"Industry-Specific Applications"},
    {num:80, title:"How does RPG II integrate with healthcare record-keeping systems?", label:"Industry-Specific Applications"},
    {num:81, title:"What strategies exist for maintaining RPG II systems in the long term?", label:"Future-Proofing"},
    {num:82, title:"How can you transition from RPG II to cloud-based architectures?", label:"Future-Proofing"},
    {num:83, title:"What modernization tools exist for upgrading RPG II applications?", label:"Future-Proofing"},
    {num:84, title:"How do you document RPG II systems for future developers?", label:"Future-Proofing"},
    {num:85, title:"What are the benefits of hybrid RPG II and modern system approaches?", label:"Future-Proofing"},
    {num:86, title:"What considerations should be made when retiring an RPG II system?", label:"Retirement Strategies"},
    {num:87, title:"How do you ensure backward compatibility when updating RPG II code?", label:"Retirement Strategies"},
    {num:88, title:"What are the legal and compliance risks of continuing to run RPG II applications?", label:"Retirement Strategies"},
    {num:89, title:"What role does AI and automation play in analyzing RPG II systems?", label:"Future-Proofing"},
    {num:90, title:"How do you prepare RPG II applications for integration with AI-driven analytics?", label:"Future-Proofing"},
    {num:91, title:"How do you reverse-engineer undocumented RPG II programs?", label:"Reverse Engineering"},
    {num:92, title:"What is the best approach for migrating an entire RPG II system to a new architecture?", label:"System Migration"},
    {num:93, title:"How do you handle security vulnerabilities in legacy RPG II applications?", label:"Security"},
    {num:94, title:"What are the risks and benefits of RPG II virtualization?", label:"Virtualization"},
    {num:95, title:"How can RPG II programs be optimized for sustainability and energy efficiency?", label:"Performance Optimization"},
    {num:96, title:"What methods exist for automating RPG II development workflows?", label:"Automation"},
    {num:97, title:"How do you extract business logic from RPG II for reuse in modern applications?", label:"Legacy Maintenance"},
    {num:98, title:"What are the key differences between RPG II and newer RPG versions?", label:"Modernization"},
    {num:99, title:"What are the biggest challenges facing organizations still using RPG II?", label:"Industry Challenges"},
    {num:100, title:"How will RPG II's legacy impact future generations of enterprise software?", label:"Industry Challenges"}
];

// Content generator with code examples
function generateContent(postNum) {
    const codeExamples = {
    // PROGRAM STRUCTURE
    1: `H OPTION(*SRCSTMT)
H DEBUG(*YES)
H DBSETNAME(LIBRARY)`,
    
    3: `H Header
F QSYSPRT   O    F 132        PRINTER
F MYFILE    IF   E           DISK`,
    
    // FILE HANDLING
    5: `F CUSTMAST  IF   E           DISK
F                                     rename(CUSTNAME:CNAME)`,
    
    11: `F INPUT     CF   E             DISK
F                                     USROPN`,
    
    13: `C           READ CUSTMAST
C           DOW NOT %EOF
C                     EXSR Process
C           ENDDO`,
    
    // DATA TYPES
    6: `D CLERK          S              5P 0
D NAME           S             15A`,
    
    7: `D PRICE          S              7P 2 INZ(123.45)`,
    
    // CONTROL FLOW
    19: `C           IF SALARY > 50000
C                     EXSR TaxCalc
C           ENDIF`,
    
    24: `C           GOTO UpdateLoop`,
    
    // DEBUGGING
    28: `C           DUMP
C           EXSR LogError`,
    
    // MODERNIZATION
    47: `C/EXEC SQL
C+ DECLARE C1 CURSOR FOR
C+ SELECT * FROM CUSTOMERS
C/END-EXEC`,
    
    // PERFORMANCE
    41: `C           SETLL KEYVAL MASTER
C           READ MASTER`,
    
    // LEGACY MAINTENANCE
    36: `** Legacy code warning **
C           Z-ADD 0           COUNT
C           MOVE *ALL'9'      FLD1`,
    
    // INTERFACING
    51: `C           CALL 'COBOLPROG'
C                     PARM           COB_IN
C                     PARM           COB_OUT`,
    
    // SYSTEM MIGRATION
    92: `** Migration Strategy **
// 1. Analyze dependencies
// 2. Create wrapper modules
// 3. Gradual replacement`,
    
    // Add remaining examples following this pattern

97: `<div class="best-practice">
    <strong>Recommended Approach:</strong>
    <ul>
        <li>Document all legacy dependencies</li>
        <li>Create isolation layers</li>
        <li>Implement monitoring</li>
    </ul>
</div>`
};
if(codeExamples[postNum]) {
        return `<pre><code>${codeExamples[postNum]}</code></pre>`;
    }
    // Fallback for non-code posts
    return `<div class="conceptual-content">
        <p><em>Best practice guidance:</em></p>
        <ul>
            <li>Analyze execution context</li>
            <li>Review system documentation</li>
            <li>Implement incremental changes</li>
        </ul>
    </div>`;
}

// Tag enhancer
function getAdditionalTags(label) {
    const tagMap = {
        'File Handling': ['legacyintegration', 'AS400'],
        'Debugging': ['troubleshooting'],
        'Legacy Maintenance': ['techdebt', 'refactoring'],
        'Modernization': ['cloud', 'APIs'],
        'Performance Optimization': ['devops', 'CI/CD']
    };
    return tagMap[label] || [];
}

// Post template
function createPostHTML(post) {
    const postDate = postDateMap.get(post.num);
    return `
        <div class="post">
            <div class="date">${postDate.toLocaleDateString('en-GB', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
            })}</div>
            <h2>${post.title}</h2>
            ${generateContent(post.num)}
            <div class="tags">
                <span class="tag">${post.label}</span>
                ${getAdditionalTags(post.label).map(t => `<span class="tag">#${t}</span>`).join('')}
            </div>
        </div>
    `;
}


// Initialize
// Update initialization
document.addEventListener('DOMContentLoaded', () => {
    initializeDates(); // Generates dates mapped to post.num
    renderTagFilters();
    filterPosts();
});
