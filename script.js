let postDateMap = new Map();
let selectedTag = null;

function initializeDates() {
    const startDate = '2024-11-04';
    let current = new Date(startDate);
    
    posts.sort((a,b) => a.num - b.num).forEach(post => {
        // Skip weekends
        while (current.getDay() === 0 || current.getDay() === 6) {
            current.setDate(current.getDate() + 1);
        }
        
        postDateMap.set(post.num, new Date(current));
        current.setDate(current.getDate() + 1);
    });
}



const posts = [
    {
        "num": 1,
        "title": "What is the purpose of the H specifications in RPG II?",
        "label": "Program Structure",
        "answer": "<p>The H specifications in RPG II are used to define the header record of a report, controlling the layout and formatting of the report. They specify the page layout, including the page size, margins, and line spacing, as well as the printing of headings, footings, and detail lines.</p>",
        "QuestionText": "What is the purpose of the H specifications in RPG II?"
    },
    {
        "num": 2,
        "title": "How are comments written in RPG II?",
        "label": "Syntax",
        "answer": "<p>In RPG II, comments are written by using the asterisk (*) symbol in column 7, also known as the indicator area, or by using the asterisk symbol followed by the comment text after the last line of code in the program, or by using the /FREE and /END-FREE statements for free-format comments.</p>",
        "QuestionText": "How are comments written in RPG II?"
    },
    {
        "num": 3,
        "title": "What are the six main specification types in RPG II?",
        "label": "Program Structure",
        "answer": "<p>The six main specification types in RPG II are: \n* Input specifications (F specs)\n* Output specifications (F specs)\n* Calculation specifications (C specs)\n* Data description specifications (D specs)\n* Processing specifications (H, F, D, C specs)\n* Input/Output file information specifications (L specs)</p>",
        "QuestionText": "What are the six main specification types in RPG II?"
    },
    {
        "num": 4,
        "title": "How do you define a constant in RPG II?",
        "label": "Constants",
        "answer": "<p>To define a constant in RPG II, you use the <code>/DEF</code> operation. For example: \n<code>/DEF         N50             50</code> \nThis defines a named constant, <code>N50</code>, with a value of <code>50</code>.</p>",
        "QuestionText": "How do you define a constant in RPG II?"
    },
    {
        "num": 5,
        "title": "What is the significance of the F specification in RPG II?",
        "label": "File Handling",
        "answer": "<p>The F specification in RPG II is used to define file information, including file names, record formats, and input/output operations. It specifies how the program interacts with files, such as reading, writing, or updating records, and is essential for data processing and manipulation in RPG II programs.</p>",
        "QuestionText": "What is the significance of the F specification in RPG II?"
    },
    {
        "num": 6,
        "title": "How do you declare a numeric field in RPG II?",
        "label": "Data Types",
        "answer": "<p>To declare a numeric field in RPG II, you use the <code>D</code> specification type, followed by the field name, the data type (e.g., <code>5 0</code> for a 5-digit integer), and any additional parameters. For example: <code>D FieldName         5 0</code></p>",
        "QuestionText": "How do you declare a numeric field in RPG II?"
    },
    {
        "num": 7,
        "title": "What is the default length of a packed decimal field in RPG II?",
        "label": "Data Types",
        "answer": "<p>The default length of a packed decimal field in RPG II is 15 digits, with 3 digits used for the sign and the remaining for the numeric value, but this can be adjusted based on the field's definition.</p>",
        "QuestionText": "What is the default length of a packed decimal field in RPG II?"
    },
    {
        "num": 8,
        "title": "How do you define an array in RPG II?",
        "label": "Arrays",
        "answer": "<p>In RPG II, an array is defined using the <code>DIM</code> keyword. The general format is: <code>DIM array_name(number_of_elements)</code>. For example: <code>DIM MyArray(10)</code> defines an array called <code>MyArray</code> with 10 elements.</p>",
        "QuestionText": "How do you define an array in RPG II?"
    },
    {
        "num": 9,
        "title": "What is the role of indicators in RPG II?",
        "label": "Control Flow",
        "answer": "<h3>Indicators in RPG II</h3>\n<p>Indicators are used to control the flow of a program, perform specific operations, or activate/deactivate file operations. They are one-character flags that can be set on or off, allowing for conditional logic and flexible programming. Indicators can be used to:\n* Control file access and operations\n* Enable or disable error handling\n* Perform conditional logic and decision-making\n* Activate or deactivate specific program functions\nIn RPG II, indicators are denoted by an asterisk (*) followed by a number from 1 to 99. They can be set on or off using specific operations or commands, and their status can be checked and used to control the flow of the program.</p>",
        "QuestionText": "What is the role of indicators in RPG II?"
    },
    {
        "num": 10,
        "title": "How are character fields defined in RPG II?",
        "label": "Data Types",
        "answer": "<p>In RPG II, character fields are defined using the <code>C</code> or <code>D</code> specification type in the file information specifications (F-specs) or data definition specifications (D-specs). The <code>C</code> type is used for character fields, while the <code>D</code> type is used for date fields. For example, a character field named <code>NAME</code> with a length of 20 characters would be defined as <code>NAME          C                   20</code>. The length of the field can range from 1 to 256 characters.</p>",
        "QuestionText": "How are character fields defined in RPG II?"
    },
    {
        "num": 11,
        "title": "How do you define an input file in the F specification?",
        "label": "File Handling",
        "answer": "<p>In the F specification, an input file is defined using the <code>open</code> keyword, followed by the file mode, filename, and file variable. The general syntax is: <code>open mode filename as #filevariable</code>.</p>",
        "QuestionText": "How do you define an input file in the F specification?"
    },
    {
        "num": 12,
        "title": "What does the 'DISK' keyword indicate in the F specification?",
        "label": "File Handling",
        "answer": "<p>The 'DISK' keyword in the F specification indicates that the variable or data structure is stored on disk rather than in memory.</p>",
        "QuestionText": "What does the 'DISK' keyword indicate in the F specification?"
    },
    {
        "num": 13,
        "title": "How can you read a record from a file in RPG II?",
        "label": "File Handling",
        "answer": "<p>To read a record from a file in RPG II, use the <code>READ</code> operation. The general syntax is: <code>READ file-name record-name</code>. This operation reads the next record from the file into the record-name. If the file is not open, you must open it first using the <code>O</code> (open) operation, for example: <code>O file-name</code>. After opening the file, use the <code>READ</code> operation to read a record. For example: </p>\n<div class=\"codehilite\"><pre><span></span><code>O FILE1\nREAD FILE1 REC1\n</code></pre></div>",
        "QuestionText": "How can you read a record from a file in RPG II?"
    },
    {
        "num": 14,
        "title": "What is the purpose of the READ operation in RPG II?",
        "label": "File Handling",
        "answer": "<p>The READ operation in RPG II is used to read a record from a file. It retrieves data from a file and stores it in a record format, allowing the program to access and manipulate the data. The READ operation is typically used to retrieve a single record or a set of records from a file, and it is often used in conjunction with other operations, such as WRITE and CHAIN, to perform complex file processing tasks.</p>",
        "QuestionText": "What is the purpose of the READ operation in RPG II?"
    },
    {
        "num": 15,
        "title": "How do you update a record in an RPG II file?",
        "label": "File Handling",
        "answer": "<p>To update a record in an RPG II file, you need to read the record, make the necessary changes, and then write the updated record back to the file. This is typically done using the <code>CHAIN</code> operation to read the record, and then the <code>WRITE</code> operation to update it. The general steps are:\n* Use <code>CHAIN</code> to read the record from the file.\n* Make the necessary changes to the record.\n* Use <code>WRITE</code> to update the record in the file.</p>",
        "QuestionText": "How do you update a record in an RPG II file?"
    },
    {
        "num": 16,
        "title": "How do you perform addition in RPG II?",
        "label": "Arithmetic Operations",
        "answer": "<p>To perform addition in RPG II, you use the <code>ADD</code> operation code. The general format is <code>ADD</code> <em>field1</em> <code>,</code> <em>field2</em> <code>,</code> <em>resultfield</em> <code>. For example:</code>ADD NUM1, NUM2, SUM<code>will add the values in</code>NUM1<code>and</code>NUM2<code>and store the result in</code>SUM`.</p>",
        "QuestionText": "How do you perform addition in RPG II?"
    },
    {
        "num": 17,
        "title": "What does the MULT operation do in RPG II?",
        "label": "Arithmetic Operations",
        "answer": "<p>The MULT operation in RPG II is used for multiplication. It takes two numeric fields as operands and returns their product, storing the result in a specified field.</p>",
        "QuestionText": "What does the MULT operation do in RPG II?"
    },
    {
        "num": 18,
        "title": "How can you compare two numeric values in RPG II?",
        "label": "Comparison Operators",
        "answer": "<p>To compare two numeric values in RPG II, you can use the following opcodes: \n- <code>BH</code> (Branch Higher) \n- <code>BL</code> (Branch Lower) \n- <code>BE</code> (Branch Equal) \n- <code>BNE</code> (Branch Not Equal) \n- <code>BNH</code> (Branch Not Higher) \n- <code>BNL</code> (Branch Not Lower). \nYou can place the first numeric value in a register and the second in another register, then use the chosen opcode to perform the comparison and control the program flow based on the result.</p>",
        "QuestionText": "How can you compare two numeric values in RPG II?"
    },
    {
        "num": 19,
        "title": "What RPG II operation is used to branch based on a condition?",
        "label": "Control Flow",
        "answer": "<p>The RPG II operation used to branch based on a condition is <code>IF</code> or <code>IFEQ</code>, <code>IFNE</code>, etc., but specifically, the <code>IF</code> operation along with a <code>GOTO</code> or <code>CHAIN</code> is not typically used, it's the <code>IF</code> along with <code>GOTO</code> or the <code>CHAIN</code> command to move to a different procedure or the <code>TAG</code> command to move to a specific point in the code. However, it is the <code>GOTO</code> or the <code>CHAIN</code> command that actually branches to a different procedure. Typically, you use a comparison operation such as IFEQ to compare two fields and perform the action based on the result. Another option is using the <code>TAG</code> to move to a different point in the same procedure. In modern RPGLE the preferred method would be using /FREE and using the <code>IF</code> with the corresponding condition and branching accordingly.</p>",
        "QuestionText": "What RPG II operation is used to branch based on a condition?"
    },
    {
        "num": 20,
        "title": "How do you define a calculation in the C specification?",
        "label": "Calculations",
        "answer": "<p>In the C specification, a calculation is defined as an expression that follows the rules of syntax and semantics defined in the C standard. According to the C11 standard (Section 6.5), an expression is a sequence of operators and operands that yields a value. A calculation can involve various operators such as arithmetic, bitwise, relational, logical, and assignment operators, which are applied to operands like variables, constants, and function calls. The calculation is evaluated according to the operator precedence and associativity rules, resulting in a value that can be used in the program.</p>",
        "QuestionText": "How do you define a calculation in the C specification?"
    },
    {
        "num": 21,
        "title": "How do you use an indicator to conditionally execute a calculation?",
        "label": "Control Flow",
        "answer": "<p>To conditionally execute a calculation using an indicator, you can use an IF statement in many spreadsheet programs or programming languages. The basic syntax is: <code>IF(indicator, value_if_true, value_if_false)</code>. You can replace <code>indicator</code> with a condition or a cell that contains a condition, <code>value_if_true</code> with the calculation you want to perform if the condition is true, and <code>value_if_false</code> with an alternative value or calculation if the condition is false. For example: <code>IF(A1&gt;10, A1*2, A1*3)</code>, where <code>A1</code> is the cell containing the indicator value.</p>",
        "QuestionText": "How do you use an indicator to conditionally execute a calculation?"
    },
    {
        "num": 22,
        "title": "What is a level break in RPG II?",
        "label": "Control Flow",
        "answer": "<p>In RPG II, a level break refers to a change in the detail line's key that causes the program to start a new control level. This occurs when the key of the detail line being read is different from the key of the previous detail line. When a level break is detected, the program performs any necessary operations for the previous level, such as calculating totals, before moving on to process the new level. Level breaks are used to handle grouped data, such as processing orders for each customer separately.</p>",
        "QuestionText": "What is a level break in RPG II?"
    },
    {
        "num": 23,
        "title": "How does RPG II handle loops?",
        "label": "Loops",
        "answer": "<p>RPG II handles loops through the use of designated loop operations, including <code>DO</code> and <code>DOW</code> loops, and <code>FOR</code> loops are not natively supported. A <code>DOW</code> loop will repeat while the specified condition is true, whereas a <code>DO</code> loop will repeat a specified number of times. Loops in RPG II can be exited using the <code>LEAVE</code> operation.</p>",
        "QuestionText": "How does RPG II handle loops?"
    },
    {
        "num": 24,
        "title": "What is the purpose of the GOTO operation?",
        "label": "Control Flow",
        "answer": "<p>The GOTO operation is a programming instruction that transfers control to a different part of the program, typically labeled with a specific identifier or line number. It allows the program to jump to a specific location, skipping over or repeating certain sections of code. The purpose of GOTO is to provide a way to control the flow of a program, enabling loops, conditional statements, and other complex logic. However, its use is often discouraged in modern programming practices due to potential issues with code readability and maintainability.</p>",
        "QuestionText": "What is the purpose of the GOTO operation?"
    },
    {
        "num": 25,
        "title": "How do you use an indicator to control program flow?",
        "label": "Control Flow",
        "answer": "<p>Indicators are used to control program flow by setting a specific value based on a condition. The indicator can then be used in conditional statements, such as <code>if</code> or <code>while</code> loops, to determine the course of action. For example, you can set an indicator to 1 if a certain condition is met and 0 if it's not. The program can then use this indicator to decide which path to take. This allows for more flexible and dynamic program flow control, making it easier to handle complex logic and decision-making processes.</p>",
        "QuestionText": "How do you use an indicator to control program flow?"
    },
    {
        "num": 26,
        "title": "What is an externally described file in RPG II?",
        "label": "File Handling",
        "answer": "<p>In RPG II, an externally described file is a file that has its record format defined externally, typically in a separate file or data dictionary. This means that the file's record layout, field names, and data types are defined outside of the RPG program, allowing for flexibility and maintainability. Externally described files are often used with the F spec, which allows RPG programs to access and manipulate the file's data based on the external definition. This approach makes it easier to modify the file's structure without having to change the RPG code.</p>",
        "QuestionText": "What is an externally described file in RPG II?"
    },
    {
        "num": 27,
        "title": "How can you call an external program from RPG II?",
        "label": "Program Calls",
        "answer": "<p>To call an external program from RPG II, you can use the <code>CALL</code> operation or the <code>QCMDEXC</code> API. The <code>CALL</code> operation allows you to call another RPG program, while the <code>QCMDEXC</code> API can be used to execute a command that starts an external program. The <code>QCMDEXC</code> API is often used to call programs written in other languages, such as COBOL or CL.</p>",
        "QuestionText": "How can you call an external program from RPG II?"
    },
    {
        "num": 28,
        "title": "How do you handle errors in RPG II?",
        "label": "Debugging",
        "answer": "<p>In RPG II, errors are handled using the <code>ON-ERROR</code> operation code, which specifies the procedure to be taken when an error occurs. The <code>ON-ERROR</code> operation code is usually followed by a procedure name or a specific action to be taken. Additionally, RPG II also provides the <code>EXCEPT/EXSR</code> operation codes to handle exceptions. The <code>EXCEPT</code> operation code is used to specify an exception-handling routine, and the <code>EXSR</code> operation code is used to call the exception-handling routine.</p>",
        "QuestionText": "How do you handle errors in RPG II?"
    },
    {
        "num": 29,
        "title": "What is the difference between a primary and secondary file in RPG II?",
        "label": "File Handling",
        "answer": "<p>In RPG II, primary and secondary files refer to the type of file being accessed. \n* A primary file is the main file being processed, and it is the file from which records are read or written. \n* A secondary file, also known as a lookup file, is a file that is used to provide additional information or validation for the primary file. \nSecondary files are often used for matching, sorting, or validating data in the primary file.</p>",
        "QuestionText": "What is the difference between a primary and secondary file in RPG II?"
    },
    {
        "num": 30,
        "title": "How do you define a multi-record format file in RPG II?",
        "label": "File Handling",
        "answer": "<p>To define a multi-record format file in RPG II, you use the <strong>F</strong> specification to specify the file and the <strong>L</strong> specification to specify the record formats. Each record format is defined separately using the <strong>R</strong> specification, and the <strong>L</strong> specification is used to specify the length of each record format. For example:</p>\n<div class=\"codehilite\"><pre><span></span><code>FFile1     UF   A          Disk\nLFile1                     100\nRRec1                      100\nRRec2                      200\n</code></pre></div>",
        "QuestionText": "How do you define a multi-record format file in RPG II?"
    },
    {
        "num": 31,
        "title": "How do you handle indexed files in RPG II?",
        "label": "File Handling",
        "answer": "<p>To handle indexed files in RPG II, you use the <code>CHAIN</code> operation to read a record by its key, and the <code>READ</code> operation to read the next record in the file. The <code>CHAIN</code> operation searches for a record with a key that matches the one specified, while the <code>READ</code> operation retrieves the next record in the sequence. You can also use the <code>READE</code> operation to read the next record and check if the key has changed, allowing you to process groups of records with the same key. Additionally, the <code>SETLL</code> and <code>SETGT</code> operations can be used to position the file to a specific key or to a key greater than the one specified.</p>",
        "QuestionText": "How do you handle indexed files in RPG II?"
    },
    {
        "num": 32,
        "title": "What is the significance of using a primary file vs. a secondary file?",
        "label": "File Handling",
        "answer": "<p>When working with files, the terms primary and secondary refer to the order or priority in which the files are used or accessed. A primary file is the main or original file, often the most up-to-date or the one from which other files are derived. Using a primary file is significant because it ensures that you're working with the most current, accurate, and authoritative data. On the other hand, a secondary file could be a copy, an older version, or one that is derived from the primary file but has been modified in some way. Relying on a secondary file may lead to using outdated or altered information, which can result in errors or inconsistencies. The significance of using a primary file versus a secondary file lies in the assurance of data integrity, accuracy, and reliability, which is crucial in various contexts such as data analysis, research, and legal documentation.</p>",
        "QuestionText": "What is the significance of using a primary file vs. a secondary file?"
    },
    {
        "num": 33,
        "title": "How do you process multiple record formats within a single file?",
        "label": "File Handling",
        "answer": "<p>To process multiple record formats within a single file, you can use a few approaches. \n* Define a common header or identifier for each record type, allowing you to determine the format as you read the file.\n* Use a parsing library or tool that supports multiple formats, such as CSV, JSON, or XML.\n* Implement custom parsing logic using programming languages like Python or Java, where you can write conditional statements to handle different record formats.\n* Utilize data processing frameworks like Apache Beam or Apache Spark, which provide built-in support for handling multiple data formats.\n* Convert all records to a standard format before processing to simplify the parsing and analysis steps.</p>",
        "QuestionText": "How do you process multiple record formats within a single file?"
    },
    {
        "num": 34,
        "title": "What are the key considerations when updating records in a sequential file?",
        "label": "File Handling",
        "answer": "<p>When updating records in a sequential file, key considerations include ensuring data consistency, maintaining file integrity, and preventing data loss. It's essential to backup the file before making changes, verify record identification, and validate updates to prevent errors. Additionally, consider the impact on file organization, indexing, and relationships with other files or systems.</p>",
        "QuestionText": "What are the key considerations when updating records in a sequential file?"
    },
    {
        "num": 35,
        "title": "How can you efficiently read and write from multiple files in RPG II?",
        "label": "File Handling",
        "answer": "<p>To efficiently read and write from multiple files in RPG II, use the <code>CHAIN</code> operation to read a record from a file and the <code>WRITE</code> operation to write a record to a file. You can also use the <code>READ</code> operation in a loop to read multiple records from a file. \nFor multiple files, use the <code>F-spec</code> to define each file and then use the <code>READ</code> and <code>WRITE</code> operations to interact with each file.\nUse subroutines to organize your code and reduce duplication when working with multiple files.\nAdditionally, consider using arrays or data structures to store and manage data from multiple files. \nUse the <code>OPEN</code> operation to open all files at the beginning of the program and the <code>CLOSE</code> operation to close all files at the end.</p>",
        "QuestionText": "How can you efficiently read and write from multiple files in RPG II?"
    },
    {
        "num": 36,
        "title": "What challenges arise when modifying legacy RPG II programs?",
        "label": "Legacy Maintenance",
        "answer": "<p>Modifying legacy RPG II programs can be challenging due to several reasons. \n* Outdated language and syntax: RPG II is an older programming language, and its syntax may not be compatible with modern systems and technologies.\n* Lack of documentation: Legacy programs often lack proper documentation, making it difficult to understand the code and its intent.\n* Limited support: RPG II is no longer widely supported, and finding skilled developers familiar with the language can be difficult.\n* Integration with modern systems: Integrating RPG II programs with modern systems and technologies can be complicated due to compatibility issues.\n* Data format and structure: Legacy programs may use outdated data formats and structures, which can be difficult to work with and integrate with modern systems.</p>",
        "QuestionText": "What challenges arise when modifying legacy RPG II programs?"
    },
    {
        "num": 37,
        "title": "How do you add new features to an old RPG II system without breaking existing logic?",
        "label": "Legacy Maintenance",
        "answer": "<p>To add new features to an old RPG II system without breaking existing logic, start by identifying the changes you want to make and assessing their impact on the existing code. Use techniques like encapsulation and modular programming to isolate new features from the old code. Implement new functionality in separate modules or programs, and use interfaces or APIs to interact with the existing system. Thoroughly test the new features to ensure they work as expected and do not introduce any errors or bugs into the existing logic. Consider refactoring the old code to make it more maintainable and adaptable to future changes.</p>",
        "QuestionText": "How do you add new features to an old RPG II system without breaking existing logic?"
    },
    {
        "num": 38,
        "title": "What debugging techniques are available for RPG II on older hardware?",
        "label": "Debugging",
        "answer": "<p>To debug RPG II programs on older hardware, several techniques are available:\n* Use of debug interrupts, such as the <code>-debug</code> or <code>trace</code> commands\n* Display files or printouts to show variable values and program flow\n* Use of debugging tools, such as IBM's Debug Tool or third-party products\n* Manual code reviews and walkthroughs\n* Use of test data and scenarios to isolate issues\n* RPG II's built-in <code>*DEBUG</code> mode, which allows for step-through execution and variable inspection \nNote that some of these techniques may require additional setup or hardware, and the availability of certain tools may depend on the specific hardware and system configuration.</p>",
        "QuestionText": "What debugging techniques are available for RPG II on older hardware?"
    },
    {
        "num": 39,
        "title": "How do you track and document changes in legacy RPG II codebases?",
        "label": "Legacy Maintenance",
        "answer": "<p>To track and document changes in legacy RPG II codebases, several approaches can be taken:\n*   Use a version control system like SVN or Git to keep a record of all changes made to the code.\n*   Implement a change management process that requires developers to document all changes, including the reason for the change, the code affected, and the date of the change.\n*   Utilize code comparison tools to identify changes between different versions of the code.\n*   Maintain a change log or history file that chronicles all changes made to the codebase.\n*   Consider using a static code analysis tool to help identify and document changes, as well as to improve overall code quality.</p>",
        "QuestionText": "How do you track and document changes in legacy RPG II codebases?"
    },
    {
        "num": 40,
        "title": "Why is technical debt a concern in RPG II systems and how can it be managed?",
        "label": "Legacy Maintenance",
        "answer": "<p>Technical debt in RPG II systems refers to the cost of implementing quick fixes or workarounds that need to be revisited later. This concern arises from the system's outdated nature, as RPG II is an older programming language. Over time, these shortcuts can lead to system instability, difficulty in maintenance, and increased risk of errors. \nTo manage technical debt, prioritize refactoring, updating outdated code, and implementing efficient solutions. Regularly review and assess the system's codebase to identify areas of technical debt and create a plan to address them. This proactive approach helps minimize the accumulation of technical debt and ensures the long-term sustainability of RPG II systems.</p>",
        "QuestionText": "Why is technical debt a concern in RPG II systems and how can it be managed?"
    },
    {
        "num": 41,
        "title": "What strategies can you use to optimize RPG II file processing?",
        "label": "Performance Optimization",
        "answer": "<p>To optimize RPG II file processing, consider the following strategies: \n* Use efficient file access methods, such as chaining, to reduce disk I/O.\n* Implement file caching to minimize the number of disk reads.\n* Optimize record formatting to reduce storage requirements and improve data transfer efficiency.\n* Utilize RPG II's built-in file handling features, such as file status codes, to handle file-related errors and exceptions.\n* Apply performance tuning techniques, like reorganizing files and updating statistics, to maintain file organization and accessibility.</p>",
        "QuestionText": "What strategies can you use to optimize RPG II file processing?"
    },
    {
        "num": 42,
        "title": "How does excessive disk I/O impact RPG II performance and how can it be mitigated?",
        "label": "Performance Optimization",
        "answer": "<p>Excessive disk I/O can significantly impact RPG II performance by increasing the time it takes to read and write data, resulting in slower processing times and reduced system throughput. This can occur when RPG II programs perform frequent disk accesses, such as reading or writing large files, or when multiple programs compete for disk resources.</p>\n<p>To mitigate the impact of excessive disk I/O on RPG II performance:\n* Optimize RPG II programs to reduce disk accesses, such as by using arrays or data structures to minimize file I/O\n* Use disk caching mechanisms, such as those provided by the operating system or disk controllers, to improve disk access times\n* Implement data compression or encryption to reduce the amount of data written to disk\n* Consider using solid-state disks (SSDs) or other high-performance storage devices to improve disk I/O speeds\n* Monitor disk I/O activity and adjust system configuration or program logic as needed to optimize performance.</p>",
        "QuestionText": "How does excessive disk I/O impact RPG II performance and how can it be mitigated?"
    },
    {
        "num": 43,
        "title": "What is the most efficient way to iterate through large datasets in RPG II?",
        "label": "Performance Optimization",
        "answer": "<p>To efficiently iterate through large datasets in RPG II, you can use a combination of techniques. One approach is to use the <code>READ</code> operation with a loop, allowing you to process each record individually. You can also use the <code>CHAIN</code> operation to position the file pointer at a specific record and then use <code>READ</code> to retrieve it. Additionally, using pointers or file information data structures can help improve performance. It's also essential to use the <code>*LOVAL</code> and <code>*HIVAL</code> keywords to specify the range of records you want to process, reducing unnecessary iterations.</p>",
        "QuestionText": "What is the most efficient way to iterate through large datasets in RPG II?"
    },
    {
        "num": 44,
        "title": "How do you optimize numeric calculations to reduce processing time?",
        "label": "Performance Optimization",
        "answer": "<p>To optimize numeric calculations and reduce processing time, consider the following strategies:\n* Use efficient data types: Choose data types that minimize memory usage and optimize calculations, such as using integers instead of floats when possible.\n* Reduce precision: If possible, reduce the precision of calculations to decrease processing time.\n* Avoid unnecessary calculations: Minimize the number of calculations by reusing results or using caching mechanisms.\n* Leverage parallel processing: Utilize multi-core processors or distributed computing to perform calculations in parallel, significantly reducing overall processing time.\n* Optimize algorithms: Implement optimized algorithms, such as using vectorized operations or approximate calculations, to reduce computational complexity.</p>",
        "QuestionText": "How do you optimize numeric calculations to reduce processing time?"
    },
    {
        "num": 45,
        "title": "What RPG II coding practices should be avoided to maintain efficiency?",
        "label": "Performance Optimization",
        "answer": "<p>To maintain efficiency in RPG II coding, several practices should be avoided:\n* Using unnecessary indicators, such as file information or error handling, when they are not required.\n* Failing to properly close files after use, leading to potential file locking issues.\n* Not using subroutines for repetitive code, resulting in duplicated code and maintenance issues.\n* Inadequate commenting and documentation, making it difficult for other developers to understand the code.\n* Ignoring compiler warnings and messages, which can help identify and resolve potential issues early.\n* Not following a consistent naming convention for variables and fields, leading to confusion and errors.\n* Using outdated or deprecated language features, which can cause problems with compatibility and maintenance. \nAvoiding these practices can help improve the efficiency, readability, and maintainability of RPG II code.</p>",
        "QuestionText": "What RPG II coding practices should be avoided to maintain efficiency?"
    },
    {
        "num": 46,
        "title": "What are the key considerations when migrating an RPG II program to a modern RPG version?",
        "label": "Modernization",
        "answer": "<p>When migrating an RPG II program to a modern RPG version, several key considerations come into play. \n* <strong>Language Syntax</strong>: Understand the differences in language syntax between RPG II and the target modern RPG version, such as RPGLE or RPGL.\n* <strong>Data Access</strong>: Consider changes in data access methods, including the use of SQL instead of legacy file access methods.\n* <strong>Error Handling</strong>: Update error handling to take advantage of modern RPG's more robust error handling capabilities.\n* <strong>Code Organization</strong>: Refactor code to adhere to modern coding standards, including the use of subprocedures and modular code.\n* <strong>Performance</strong>: Identify performance-critical areas and optimize them using modern RPG features.\n* <strong>Testing</strong>: Develop a thorough testing plan to ensure the migrated program functions as expected.</p>",
        "QuestionText": "What are the key considerations when migrating an RPG II program to a modern RPG version?"
    },
    {
        "num": 47,
        "title": "How can RPG II interact with relational databases like DB2?",
        "label": "Modernization",
        "answer": "<p>RPG II can interact with relational databases like DB2 using SQL statements. To do this, you need to use the SQL precompiler to embed SQL statements in your RPG II program. The SQL precompiler converts the SQL statements into a format that can be understood by the DB2 database. You can use SQL statements to perform various operations such as creating tables, inserting data, updating data, and retrieving data from the database. Additionally, you can use RPG II's built-in database access functions, such as <code>CHAIN</code> and <code>READ</code>, to interact with the database. However, using SQL statements is generally more flexible and powerful.</p>",
        "QuestionText": "How can RPG II interact with relational databases like DB2?"
    },
    {
        "num": 48,
        "title": "What are the challenges of integrating RPG II programs with web-based applications?",
        "label": "Modernization",
        "answer": "<p>Integrating RPG II programs with web-based applications poses several challenges. One major issue is the difference in programming languages and paradigms, as RPG II is a legacy language designed for batch processing, while web applications typically use modern languages like Java, Python, or JavaScript. Additionally, RPG II programs often rely on outdated database management systems, making integration with modern web-based databases difficult. Security is another concern, as RPG II programs may not be designed with modern security standards in mind, leaving them vulnerable to web-based attacks. Furthermore, the user interface and user experience of RPG II programs can be vastly different from what users expect from modern web applications, requiring significant rework to provide a seamless user experience.</p>",
        "QuestionText": "What are the challenges of integrating RPG II programs with web-based applications?"
    },
    {
        "num": 49,
        "title": "How can you connect RPG II with modern API services?",
        "label": "Modernization",
        "answer": "<p>To connect RPG II with modern API services, you can use API wrappers or third-party libraries that provide an interface between RPG II and the API service. One approach is to use the RPG II's built-in HTTP support to send requests to the API service. Another option is to use a middleware layer, such as a message queue or an enterprise service bus, to integrate RPG II with the API service. Additionally, some modern API services provide SDKs or libraries for RPG II, making it easier to connect and use their services.</p>",
        "QuestionText": "How can you connect RPG II with modern API services?"
    },
    {
        "num": 50,
        "title": "What are the potential risks and benefits of rewriting RPG II systems in modern languages?",
        "label": "Modernization",
        "answer": "<p>Rewriting RPG II systems in modern languages can have both benefits and drawbacks. The potential benefits include improved maintainability, increased efficiency, and enhanced scalability. Modern languages often have better support for object-oriented programming, web development, and integration with other systems, making it easier to adapt to changing business needs. Additionally, modern languages can provide better performance, security, and reliability. However, there are also potential risks, such as the cost and complexity of rewriting legacy systems, the potential for introducing new bugs or errors, and the need to retrain developers. Furthermore, the rewritten system may not be fully compatible with existing systems or interfaces, which could lead to integration issues. Overall, the decision to rewrite RPG II systems in modern languages should be carefully considered, weighing the potential benefits against the potential risks and ensuring that the new system meets the organization's needs and goals.</p>",
        "QuestionText": "What are the potential risks and benefits of rewriting RPG II systems in modern languages?"
    },
    {
        "num": 51,
        "title": "How can RPG II programs communicate with COBOL applications?",
        "label": "Interfacing with Other Languages",
        "answer": "<p>RPG II programs can communicate with COBOL applications through various methods, including:\n* Data files: Both RPG II and COBOL can read and write to the same data files, allowing them to exchange data.\n* Parameter passing: RPG II programs can pass parameters to COBOL programs, and vice versa, using external procedure calls or subroutines.\n* Message queues: RPG II and COBOL programs can use message queues to send and receive messages, enabling asynchronous communication.\n* API calls: RPG II programs can make API calls to COBOL programs, or vice versa, using programming interfaces such as IBM's Program Communication Facility (PCF) or IBM's External Procedure Interface (EI).</p>",
        "QuestionText": "How can RPG II programs communicate with COBOL applications?"
    },
    {
        "num": 52,
        "title": "What role does CL (Control Language) play in managing RPG II job execution?",
        "label": "Interfacing with Other Languages",
        "answer": "<p>CL (Control Language) plays a crucial role in managing RPG II job execution by providing a way to control and automate the execution of RPG II programs. It allows users to create scripts that can be used to perform tasks such as compiling and running RPG II programs, copying and moving files, and handling errors. CL is used to write commands that can be executed by the system to perform specific tasks, making it an essential tool for managing RPG II job execution.</p>",
        "QuestionText": "What role does CL (Control Language) play in managing RPG II job execution?"
    },
    {
        "num": 53,
        "title": "How can SQL be embedded in an RPG II program?",
        "label": "Interfacing with Other Languages",
        "answer": "<p>To embed SQL in an RPG II program, you can use the SQL precompiler or the SQL API. The SQL precompiler allows you to embed SQL statements directly in your RPG II code, while the SQL API provides a set of procedures that can be called from RPG II to execute SQL statements. </p>\n<p>You can also use the <code>/FREE</code> and <code>/END-FREE</code> directives to specify where the SQL code starts and ends. </p>\n<p>For example:</p>\n<div class=\"codehilite\"><pre><span></span><code><span class=\"n\">H</span> <span class=\"n\">DFTACTGRP</span><span class=\"p\">(</span><span class=\"o\">*</span><span class=\"n\">NO</span><span class=\"p\">)</span>\n\n <span class=\"o\">/</span><span class=\"n\">FREE</span>\n  <span class=\"n\">exec</span> <span class=\"n\">sql</span> \n    <span class=\"n\">select</span> <span class=\"o\">*</span> <span class=\"n\">from</span> <span class=\"n\">mytable</span><span class=\"p\">;</span>\n <span class=\"o\">/</span><span class=\"kr\">END</span><span class=\"o\">-</span><span class=\"n\">FREE</span>\n</code></pre></div>",
        "QuestionText": "How can SQL be embedded in an RPG II program?"
    },
    {
        "num": 54,
        "title": "What are the advantages and challenges of integrating RPG II with Java?",
        "label": "Interfacing with Other Languages",
        "answer": "<h3>Advantages of Integrating RPG II with Java</h3>\n<ul>\n<li>Leverages the strengths of both languages, allowing for modernization and extension of legacy RPG II applications</li>\n<li>Enables reuse of existing RPG II code and investment in new Java-based development</li>\n<li>Improves integration with other Java-based systems and frameworks</li>\n<li>Enhances user interface and experience through Java's GUI capabilities</li>\n</ul>\n<h3>Challenges of Integrating RPG II with Java</h3>\n<ul>\n<li>Complexity of integrating two different programming languages and paradigms</li>\n<li>Potential performance issues due to differences in runtime environments and data types</li>\n<li>Requires skilled developers with expertise in both RPG II and Java</li>\n<li>May involve significant refactoring or rewriting of existing RPG II code to work seamlessly with Java</li>\n</ul>",
        "QuestionText": "What are the advantages and challenges of integrating RPG II with Java?"
    },
    {
        "num": 55,
        "title": "How do you handle data exchange between RPG II and modern ERP systems?",
        "label": "Interfacing with Other Languages",
        "answer": "<p>To handle data exchange between RPG II and modern ERP systems, several approaches can be taken:\n* Utilize APIs or web services to enable communication between the two systems\n* Implement a middleware solution to act as an intermediary for data exchange\n* Use file-based integration, such as CSV or XML files, to transfer data between systems\n* Leverage enterprise application integration (EAI) tools to facilitate data exchange and mapping between RPG II and the ERP system\n* Consider using a data replication or synchronization tool to keep data consistent across both systems.</p>",
        "QuestionText": "How do you handle data exchange between RPG II and modern ERP systems?"
    },
    {
        "num": 56,
        "title": "What tools are available for debugging RPG II programs on AS/400 systems?",
        "label": "Debugging",
        "answer": "<p>For debugging RPG II programs on AS/400 systems, several tools are available. These include:\n* Debug mode in the RPG II compiler, which allows for step-through execution and variable inspection\n* The AS/400 Debugger, which provides a graphical interface for debugging RPG II programs\n* The STRDBG command, which starts the debugger and allows for debugging of RPG II programs\n* The RPGLST debug listing, which provides a detailed listing of the program's execution, including variables and expressions.</p>",
        "QuestionText": "What tools are available for debugging RPG II programs on AS/400 systems?"
    },
    {
        "num": 57,
        "title": "How do you trace and resolve intermittent errors in RPG II batch jobs?",
        "label": "Debugging",
        "answer": "<p>To trace and resolve intermittent errors in RPG II batch jobs, follow these steps:\n* Review the job log to identify the error message and the program that caused it\n* Check the program for any unhandled exceptions or errors\n* Use debugging tools, such as the Interactive Debugger or the Batch Debugger, to step through the program and identify the cause of the error\n* Verify that all files and records are being read and written correctly\n* Test the program with different input data to see if the error is data-dependent\n* Check the system logs for any system-related issues that may be contributing to the error\n* Consider adding error handling code to the program to catch and log any errors that occur, making it easier to diagnose and resolve the issue.</p>",
        "QuestionText": "How do you trace and resolve intermittent errors in RPG II batch jobs?"
    },
    {
        "num": 58,
        "title": "What are common causes of infinite loops in RPG II and how do you prevent them?",
        "label": "Debugging",
        "answer": "<p>Infinite loops in RPG II occur when a program continues to execute indefinitely due to a logical error. Common causes include:\n* Unconditional loops without a break or exit condition\n* Incorrect use of loop counters or indices\n* Poorly designed conditional statements\n* Failure to update loop control variables</p>\n<p>To prevent infinite loops:\n* Always include a conditional statement to break or exit the loop when a certain condition is met\n* Use loop counters or indices correctly, ensuring they are updated within the loop\n* Test and validate conditional statements to ensure they behave as expected\n* Use debugging tools to identify and fix potential issues before they cause problems.</p>",
        "QuestionText": "What are common causes of infinite loops in RPG II and how do you prevent them?"
    },
    {
        "num": 59,
        "title": "How do you interpret RPG II error messages effectively?",
        "label": "Debugging",
        "answer": "<p>To interpret RPG II error messages effectively, you should first identify the error code and message. RPG II error messages typically consist of a code and a brief description of the error. </p>\n<ul>\n<li>Check the error code: RPG II error codes are usually numerical and can be found in the RPG II documentation or online resources. </li>\n<li>Understand the error message: The error message provides a brief description of the error, which can help you identify the cause of the problem. </li>\n<li>Review the program: Once you have identified the error code and message, review your program to find the line of code that is causing the error. </li>\n<li>Check for common errors: RPG II has some common errors, such as file not found, or record not found, that can be easily fixed by checking the file path or the record key. </li>\n<li>Use debugging tools: If you are still having trouble finding the error, use debugging tools, such as the RPG II debugger, to step through your program and identify the line of code that is causing the error. </li>\n</ul>\n<p>By following these steps, you can effectively interpret RPG II error messages and resolve issues with your programs.</p>",
        "QuestionText": "How do you interpret RPG II error messages effectively?"
    },
    {
        "num": 60,
        "title": "What strategies can be used to test RPG II programs efficiently?",
        "label": "Debugging",
        "answer": "<p>To test RPG II programs efficiently, several strategies can be employed. \n* <strong>Modular Testing</strong>: Break down the program into smaller modules and test each one independently to identify and isolate errors.\n* <strong>Test Data</strong>: Use a variety of test data to cover different scenarios and ensure the program handles various inputs correctly.\n* <strong>Debugging Tools</strong>: Utilize debugging tools to step through the code, examine variables, and identify the source of errors.\n* <strong>Code Reviews</strong>: Perform regular code reviews to catch errors and improve code quality.\n* <strong>Automated Testing</strong>: Consider using automated testing tools to streamline the testing process and reduce the risk of human error.</p>",
        "QuestionText": "What strategies can be used to test RPG II programs efficiently?"
    },
    {
        "num": 61,
        "title": "How do you implement a table lookup in RPG II?",
        "label": "Control Flow",
        "answer": "<p>To implement a table lookup in RPG II, you can use the <code>LOOKUP</code> operation. First, define a table with <code>K</code> and <code>L</code> specifications. The <code>K</code> specification defines the key and the <code>L</code> specification defines the length of the table. Then, use the <code>LOOKUP</code> operation to search for a value in the table, and if found, return the corresponding value. For example: </p>\n<div class=\"codehilite\"><pre><span></span><code><span class=\"n\">K</span> <span class=\"n\">table</span>\n<span class=\"n\">L</span> <span class=\"mi\">10</span>\n\n <span class=\"o\">/</span><span class=\"n\">FREE</span>\n   <span class=\"n\">lookup</span> <span class=\"n\">someValue</span> <span class=\"n\">in</span> <span class=\"n\">table</span><span class=\"p\">;</span>\n   <span class=\"n\">if</span> <span class=\"err\">%</span><span class=\"n\">found</span><span class=\"p\">;</span>\n     <span class=\"n\">DSMsomeField</span> <span class=\"o\">=</span> <span class=\"n\">table</span><span class=\"p\">(</span><span class=\"n\">someValue</span><span class=\"p\">);</span>\n   <span class=\"n\">endif</span><span class=\"p\">;</span>\n <span class=\"o\">/</span><span class=\"kr\">END</span><span class=\"o\">-</span><span class=\"n\">FREE</span>\n</code></pre></div>",
        "QuestionText": "How do you implement a table lookup in RPG II?"
    },
    {
        "num": 62,
        "title": "What are the best practices for handling nested conditional logic?",
        "label": "Control Flow",
        "answer": "<p>To handle nested conditional logic effectively, follow these best practices:\n* Keep it simple: Minimize the number of nested conditions to improve readability and reduce errors.\n* Use guard clauses: Instead of nesting multiple if-else statements, use guard clauses to return or break early.\n* Apply the Single Responsibility Principle (SRP): Ensure each conditional block has a single, well-defined responsibility.\n* Use switch statements or lookup tables: When dealing with multiple conditions, consider using switch statements or lookup tables for cleaner code.\n* Test thoroughly: Write comprehensive tests to cover all possible conditional paths and ensure the logic works as expected.</p>",
        "QuestionText": "What are the best practices for handling nested conditional logic?"
    },
    {
        "num": 63,
        "title": "How do you handle exceptions and unexpected values in calculations?",
        "label": "Control Flow",
        "answer": "<p>To handle exceptions and unexpected values in calculations, you can use a combination of error handling techniques and data validation. \n*   Implement try-except blocks to catch and handle exceptions, such as division by zero or invalid input.\n*   Validate user input to ensure it conforms to expected formats and ranges.\n*   Use conditional statements to check for unexpected values, such as null or undefined.\n*   Provide default values or fallback calculations when unexpected values are encountered. \nConsider logging exceptions and errors to track and debug issues.</p>",
        "QuestionText": "How do you handle exceptions and unexpected values in calculations?"
    },
    {
        "num": 64,
        "title": "What role do RPG II indicators play in structured program logic?",
        "label": "Control Flow",
        "answer": "<p>RPG II indicators are used to control the flow of a program's logic. They are single-character flags that can be set or reset to indicate specific conditions or events. There are several types of indicators, including:\n* Level indicators: used to indicate the level of a nested loop or block of code\n* Operation indicators: used to indicate the operation being performed, such as a read or write operation\n* Error indicators: used to indicate if an error has occurred\n* Indicator expressions: used to combine multiple indicators to control the flow of the program\nIndicators can be used to skip or repeat operations, or to exit a loop or the program entirely. They are an essential part of structured programming in RPG II, allowing developers to write efficient and organized code.</p>",
        "QuestionText": "What role do RPG II indicators play in structured program logic?"
    },
    {
        "num": 65,
        "title": "How can you implement error-handling routines in RPG II?",
        "label": "Control Flow",
        "answer": "<p>Error-handling routines can be implemented in RPG II using the following methods:\n* Use of indicators to monitor and control program flow\n* Implementation of error codes and error handling subroutines\n* Use of the <code>CHK</code> operation to check for errors\n* Use of the <code>MONITOR</code> and <code>HANDLER</code> operations to catch and handle exceptions \nExample: </p>\n<div class=\"codehilite\"><pre><span></span><code>C     MONITOR   \nC                   CHK           somefile\nC                   HANDLER       *ONERROR\nC     *ONERROR                  DSPLY         ERROR FOUND\n</code></pre></div>",
        "QuestionText": "How can you implement error-handling routines in RPG II?"
    },
    {
        "num": 66,
        "title": "How do you efficiently merge data from multiple files in RPG II?",
        "label": "File Handling",
        "answer": "<p>To efficiently merge data from multiple files in RPG II, you can use the <code>CHAIN</code> operation to read records from one file and then use the <code>READ</code> operation to read records from another file, matching the records based on a common key. Alternatively, you can use the <code>JOIN</code> operation, if available in your system, to combine records from multiple files. Another approach is to use data structures such as arrays or data structures to store and manipulate data from multiple files. It's also recommended to use subroutines or modules to organize your code and make it more maintainable.</p>",
        "QuestionText": "How do you efficiently merge data from multiple files in RPG II?"
    },
    {
        "num": 67,
        "title": "What techniques are available for sorting records in RPG II?",
        "label": "File Handling",
        "answer": "<p>RPG II provides several techniques for sorting records, including:\n* Using the <code>SORT</code> operation code to sort a file\n* Utilizing the <code>READ</code> operation with a sorted file\n* Implementing a manual sorting algorithm using loops and comparisons\n* Using the <code>CHAIN</code> operation to sort records based on a key.</p>",
        "QuestionText": "What techniques are available for sorting records in RPG II?"
    },
    {
        "num": 68,
        "title": "How do you manage concurrent file access in RPG II?",
        "label": "File Handling",
        "answer": "<p>To manage concurrent file access in RPG II, you can use the Operational Modifier (*OPN) to specify the file access mode. This includes:\n* <code>*EXCL</code> for exclusive access, which prevents other programs from accessing the file until it's closed.\n* <code>*SHR</code> for shared access, which allows multiple programs to read the file simultaneously.\n* <code>*SHRO</code> for shared read-only access, which allows multiple programs to read the file simultaneously, but not update it.\nYou can also use the <code>%OPEN</code> built-in function with the <code>I</code> (Input), <code>O</code> (Output), <code>I/O</code> (Input/Output), <code>IN</code> (Input), or <code>UPD</code> (Update) specifications to control file access.</p>",
        "QuestionText": "How do you manage concurrent file access in RPG II?"
    },
    {
        "num": 69,
        "title": "What is the purpose of the EXFMT operation in RPG II?",
        "label": "File Handling",
        "answer": "<p>The EXFMT operation in RPG II is used to extract the format of an input record and use it to describe the output record, essentially copying the format of the input to the output.</p>",
        "QuestionText": "What is the purpose of the EXFMT operation in RPG II?"
    },
    {
        "num": 70,
        "title": "How do you implement dynamic record selection in RPG II?",
        "label": "File Handling",
        "answer": "<p>To implement dynamic record selection in RPG II, you can use the <code>CHAIN</code> operation with a variable. The variable should contain the key of the record you want to select. You can also use the <code>SETLL</code> operation to position the file to the desired record and then use the <code>READ</code> operation to retrieve the record. Additionally, you can use the <code>SETGT</code> operation to set the greater-than limit for the file and then use the <code>CHAIN</code> operation to select the record. </p>\n<p>For example:</p>\n<div class=\"codehilite\"><pre><span></span><code><span class=\"n\">C</span><span class=\"w\">     </span><span class=\"k\">var</span><span class=\"w\">          </span><span class=\"n\">chain</span><span class=\"w\">     </span><span class=\"n\">file</span>\n<span class=\"n\">C</span><span class=\"w\">                   </span><span class=\"n\">setll</span><span class=\"w\">    </span><span class=\"k\">var</span><span class=\"w\">         </span><span class=\"n\">file</span>\n<span class=\"n\">C</span><span class=\"w\">                   </span><span class=\"n\">read</span><span class=\"w\">     </span><span class=\"n\">file</span>\n</code></pre></div>",
        "QuestionText": "How do you implement dynamic record selection in RPG II?"
    },
    {
        "num": 71,
        "title": "What are the risks of modifying large-scale RPG II systems?",
        "label": "Large-Scale Systems",
        "answer": "<p>Modifying large-scale RPG II systems can pose several risks, including:\n* Data corruption or loss\n* System downtime or instability\n* Incompatibility with existing programs or interfaces\n* Security vulnerabilities\n* Performance degradation\nThese risks can be mitigated by thoroughly testing and validating changes, using version control, and implementing backup and recovery procedures.</p>",
        "QuestionText": "What are the risks of modifying large-scale RPG II systems?"
    },
    {
        "num": 72,
        "title": "How can you modularize RPG II programs for better maintainability?",
        "label": "Large-Scale Systems",
        "answer": "<p>Modularizing RPG II programs involves breaking down large programs into smaller, independent modules or sub-procedures. This approach improves maintainability by allowing developers to focus on specific sections of code without affecting the entire program. To modularize RPG II programs, follow these steps:\n* Divide the program into logical modules based on functionality\n* Use sub-procedures to perform specific tasks\n* Pass data between modules using parameters\n* Use external definitions for data structures and procedures\n* Keep each module focused on a single task to reduce complexity and improve reusability.</p>",
        "QuestionText": "How can you modularize RPG II programs for better maintainability?"
    },
    {
        "num": 73,
        "title": "What challenges arise when integrating RPG II with enterprise reporting tools?",
        "label": "Large-Scale Systems",
        "answer": "<p>When integrating RPG II with enterprise reporting tools, several challenges arise. These include data type compatibility issues, differences in data formatting, and limitations in report design capabilities. Additionally, RPG II's older technology may not be compatible with modern reporting tools, requiring workarounds or custom coding to overcome integration obstacles. Compatibility with newer reporting tools can also be a challenge, due to the outdated nature of RPG II. Furthermore, ensuring data security and access controls during the integration process is crucial, as sensitive data may be exposed during the reporting process.</p>",
        "QuestionText": "What challenges arise when integrating RPG II with enterprise reporting tools?"
    },
    {
        "num": 74,
        "title": "How do you ensure data integrity in high-volume RPG II applications?",
        "label": "Large-Scale Systems",
        "answer": "<p>To ensure data integrity in high-volume RPG II applications, several strategies can be employed. \n* Validate user input to prevent incorrect or inconsistent data from entering the system. \n* Implement data verification and validation checks at multiple levels, including field, record, and file levels. \n* Use commitment control to ensure database consistency and prevent partial updates. \n* Utilize locking mechanisms to prevent concurrent modifications to the same data. \n* Implement auditing and logging to track changes and detect potential issues. \n* Regularly perform data backups and utilize recovery procedures to minimize data loss in case of errors or system failures. \n* Optimize database and application performance to reduce the likelihood of data corruption due to system overload. \n* Establish and enforce data standards and naming conventions to promote data consistency throughout the application. \n* Use RPG II's built-in error handling and exception handling mechanisms to catch and resolve data inconsistencies. \n* Consider using external tools or third-party software to monitor and analyze data integrity in RPG II applications.</p>",
        "QuestionText": "How do you ensure data integrity in high-volume RPG II applications?"
    },
    {
        "num": 75,
        "title": "What role does batch processing play in RPG II and how can it be optimized?",
        "label": "Large-Scale Systems",
        "answer": "<p>Batch processing in RPG II is used to perform repetitive tasks on large datasets, improving efficiency and reducing processing time. To optimize batch processing, several techniques can be employed:\n* Minimize database queries by retrieving and processing data in batches\n* Use efficient sorting and indexing methods to reduce processing time\n* Utilize RPG II's built-in batch processing capabilities, such as the <code>FMT</code> and <code>READ</code> operations\n* Implement error handling and logging mechanisms to monitor and resolve issues\n* Regularly review and refactor code to ensure it remains optimized and efficient.</p>",
        "QuestionText": "What role does batch processing play in RPG II and how can it be optimized?"
    },
    {
        "num": 76,
        "title": "How is RPG II used in financial applications?",
        "label": "Industry-Specific Applications",
        "answer": "<p>RPG II is used in financial applications for tasks such as payroll processing, accounts payable, and accounts receivable. Its ability to handle complex calculations and data manipulation makes it a suitable choice for financial systems. Additionally, RPG II is used for generating financial reports, such as balance sheets and income statements, due to its strong reporting capabilities. Its use in financial applications also includes tasks like calculating interest, processing transactions, and updating account balances. Overall, RPG II's strengths in data processing and calculation make it a valuable tool in financial application development.</p>",
        "QuestionText": "How is RPG II used in financial applications?"
    },
    {
        "num": 77,
        "title": "What are common use cases of RPG II in manufacturing systems?",
        "label": "Industry-Specific Applications",
        "answer": "<p>RPG II is a high-level programming language used in manufacturing systems for various tasks. Some common use cases include:\n* <strong>Inventory management</strong>: tracking and managing inventory levels, automated stockroom operations, and supply chain management.\n* <strong>Production planning</strong>: generating production schedules, tracking work orders, and managing production workflows.\n* <strong>Quality control</strong>: monitoring and controlling quality parameters, detecting defects, and implementing corrective actions.\n* <strong>Machine monitoring</strong>: monitoring machine performance, tracking downtime, and scheduling maintenance.\n* <strong>Supply chain optimization</strong>: optimizing supply chain operations, managing vendor relationships, and streamlining logistics.\n* <strong>Report generation</strong>: generating reports on production, inventory, and quality control metrics to support business decision-making.</p>",
        "QuestionText": "What are common use cases of RPG II in manufacturing systems?"
    },
    {
        "num": 78,
        "title": "How does RPG II support inventory management applications?",
        "label": "Industry-Specific Applications",
        "answer": "<p>RPG II supports inventory management applications through its ability to handle complex calculations, data processing, and file management. It allows developers to create programs that can track and manage inventory levels, monitor stock movements, and perform audits. RPG II's capabilities include:\n* Data definition and manipulation\n* File input/output operations\n* Arithmetic and logical operations\n* Control structures for decision-making and looping\nThese features enable RPG II to support various inventory management tasks, such as:\n* Tracking stock levels and inventory turnover\n* Managing orders, receipts, and shipments\n* Performing inventory valuation and costing\n* Generating reports and analytics\nOverall, RPG II's robust programming capabilities make it a suitable choice for developing inventory management applications.</p>",
        "QuestionText": "How does RPG II support inventory management applications?"
    },
    {
        "num": 79,
        "title": "What are the limitations of RPG II in modern retail systems?",
        "label": "Industry-Specific Applications",
        "answer": "<p>RPG II is a high-level programming language that was widely used in the past for building business applications, including retail systems. However, in modern retail systems, RPG II has several limitations, including:\n* Lack of support for modern databases and data structures\n* Limited support for web and mobile applications\n* Inability to integrate with modern APIs and services\n* Steep learning curve for new developers\n* Limited support for modern security and encryption standards\n* Difficulty in maintaining and updating legacy RPG II codebases.</p>",
        "QuestionText": "What are the limitations of RPG II in modern retail systems?"
    },
    {
        "num": 80,
        "title": "How does RPG II integrate with healthcare record-keeping systems?",
        "label": "Industry-Specific Applications",
        "answer": "<p>RPG II can integrate with healthcare record-keeping systems through various methods, including:\n* Utilizing APIs to exchange data between systems\n* Leveraging HL7 standards for electronic health record (EHR) integration\n* Supporting database connectivity to access and update patient records\n* Providing data encryption and secure authentication to protect sensitive healthcare information\nThis integration enables healthcare providers to streamline clinical workflows, improve data accuracy, and enhance patient care.</p>",
        "QuestionText": "How does RPG II integrate with healthcare record-keeping systems?"
    },
    {
        "num": 81,
        "title": "What strategies exist for maintaining RPG II systems in the long term?",
        "label": "Future-Proofing",
        "answer": "<p>To maintain RPG II systems in the long term, several strategies can be employed. \n* <strong>Code refactoring</strong>: Regularly review and refactor code to ensure it remains efficient and easy to maintain.\n* <strong>Documentation</strong>: Maintain accurate and up-to-date documentation of the system, including code comments and technical guides.\n* <strong>Testing</strong>: Implement comprehensive testing procedures to ensure the system continues to function as intended.\n* <strong>Staff training</strong>: Provide ongoing training for staff to ensure they have the necessary skills to maintain and update the system.\n* <strong>Modernization</strong>: Consider modernizing the system by migrating to newer technologies, such as RPG III or RPG IV, to take advantage of improved functionality and support.\n* <strong>Vendor support</strong>: Establish a relationship with a vendor who can provide ongoing support and maintenance for the system.</p>",
        "QuestionText": "What strategies exist for maintaining RPG II systems in the long term?"
    },
    {
        "num": 82,
        "title": "How can you transition from RPG II to cloud-based architectures?",
        "label": "Future-Proofing",
        "answer": "<p>To transition from RPG II to cloud-based architectures, start by modernizing your RPG II code to RPG Free or RPGLE, which are more compatible with modern IBM i systems. then, consider the following steps:\n* Refactor your monolithic RPG II application into smaller, modular services using APIs and microservices architecture.\n* Migrate your data to a cloud-based database, such as Db2 or a NoSQL database like MongoDB.\n* Use cloud-native services like Amazon Web Services (AWS), Microsoft Azure, or Google Cloud Platform (GCP) to deploy and manage your application.\n* Take advantage of cloud-based tools and services, such as containerization (e.g., Docker) and orchestration (e.g., Kubernetes), to improve scalability and reliability.\n* Develop a cloud-based user interface using web technologies like HTML, CSS, and JavaScript, and consider using a framework like React or Angular.\n* Implement security measures to protect your application and data in the cloud, such as encryption, authentication, and access control.</p>",
        "QuestionText": "How can you transition from RPG II to cloud-based architectures?"
    },
    {
        "num": 83,
        "title": "What modernization tools exist for upgrading RPG II applications?",
        "label": "Future-Proofing",
        "answer": "<p>Modernization tools for upgrading RPG II applications include ARCAD Software, LANSA, Progeni, and Profound Logic. These tools help convert RPG II code to modern languages like RPG III, RPG IV, or even Java and .NET. They also provide features like code analysis, refactoring, and migration to newer platforms. Additionally, some tools offer automated conversion, reducing manual effort and minimizing errors.</p>",
        "QuestionText": "What modernization tools exist for upgrading RPG II applications?"
    },
    {
        "num": 84,
        "title": "How do you document RPG II systems for future developers?",
        "label": "Future-Proofing",
        "answer": "<p>To document RPG II systems for future developers, follow these steps:\n* Create a system overview, including the system's purpose, functionality, and interactions with other systems.\n* Document the database structure, including file layouts, field definitions, and relationships between files.\n* Write detailed descriptions of each program, including input and output parameters, processing logic, and any error handling mechanisms.\n* Use flowcharts or pseudocode to illustrate complex logic and decision-making processes.\n* Keep documentation up-to-date by reflecting changes to the system and updating documentation accordingly.\n* Consider using automated documentation tools to generate documentation from the source code.\n* Establish a standard for documentation and ensure all developers follow it to maintain consistency throughout the system.\n* Make documentation easily accessible to future developers, such as storing it in a shared repository or including it in the system's source code.</p>",
        "QuestionText": "How do you document RPG II systems for future developers?"
    },
    {
        "num": 85,
        "title": "What are the benefits of hybrid RPG II and modern system approaches?",
        "label": "Future-Proofing",
        "answer": "<p>The benefits of hybrid RPG II and modern system approaches include improved productivity, enhanced flexibility, and increased efficiency. By combining the strengths of traditional RPG II with modern system approaches, developers can create more robust and scalable applications. This hybrid approach allows for easier maintenance, improved performance, and better integration with other systems. Additionally, it enables developers to leverage the latest technologies and tools while still utilizing the proven capabilities of RPG II. This results in faster development, reduced costs, and improved overall quality of the applications.</p>",
        "QuestionText": "What are the benefits of hybrid RPG II and modern system approaches?"
    },
    {
        "num": 86,
        "title": "What considerations should be made when retiring an RPG II system?",
        "label": "Retirement Strategies",
        "answer": "<p>When retiring an RPG II system, consider the following: \n* Data migration and storage of existing data\n* Replacement of existing business logic and functionality\n* Compatibility with new systems and software\n* Training for staff on new systems\n* Phased rollout to minimize disruption\n* Testing and quality assurance of the new system\n* Compliance with regulatory requirements\n* Preservation of historical data and records\n* Budgeting for potential costs associated with the transition.</p>",
        "QuestionText": "What considerations should be made when retiring an RPG II system?"
    },
    {
        "num": 87,
        "title": "How do you ensure backward compatibility when updating RPG II code?",
        "label": "Retirement Strategies",
        "answer": "<p>To ensure backward compatibility when updating RPG II code, several steps can be taken. \n*   Test the updated code thoroughly to identify any potential issues.\n*   Use version control systems to track changes and allow for easy reversion if needed.\n*   Implement backward compatibility checks to ensure the updated code works with existing systems and data.\n*   Document changes and updates to the codebase for future reference and maintenance.\n*   Collaborate with other developers and stakeholders to review and validate updates before implementation.</p>",
        "QuestionText": "How do you ensure backward compatibility when updating RPG II code?"
    },
    {
        "num": 88,
        "title": "What are the legal and compliance risks of continuing to run RPG II applications?",
        "label": "Retirement Strategies",
        "answer": "<h3>Legal and Compliance Risks</h3>\n<p>Continuing to run RPG II applications poses several legal and compliance risks, including:\n* <strong>Data Protection and Privacy</strong>: Outdated systems may not meet current data protection regulations, such as GDPR or HIPAA, increasing the risk of non-compliance and associated penalties.\n* <strong>Security Vulnerabilities</strong>: Older systems are more susceptible to security breaches and cyber attacks, which can lead to legal and financial consequences.\n* <strong>Lack of Support and Maintenance</strong>: As RPG II is no longer supported by IBM, finding personnel with the necessary skills to maintain and update the system can be challenging, increasing the risk of system failures and errors.\n* <strong>Compliance with Industry Regulations</strong>: Depending on the industry, there may be specific regulations that require companies to use up-to-date technology, making it difficult to justify the continued use of RPG II.\n* <strong>Reputation and Financial Risks</strong>: A security breach or system failure can damage a company's reputation and lead to financial losses, making it essential to consider the risks of continuing to run RPG II applications.</p>",
        "QuestionText": "What are the legal and compliance risks of continuing to run RPG II applications?"
    },
    {
        "num": 89,
        "title": "What role does AI and automation play in analyzing RPG II systems?",
        "label": "Future-Proofing",
        "answer": "<p>AI and automation play a significant role in analyzing RPG II systems by increasing efficiency and accuracy. Automated tools can help identify and fix errors, optimize code, and improve overall system performance. Additionally, AI-powered analytics can provide insights into system usage and help identify areas for improvement. This enables developers to focus on more complex tasks, such as modernizing and migrating RPG II systems to newer technologies. Overall, AI and automation can help extend the life of RPG II systems and improve their overall value to the organization.</p>",
        "QuestionText": "What role does AI and automation play in analyzing RPG II systems?"
    },
    {
        "num": 90,
        "title": "How do you prepare RPG II applications for integration with AI-driven analytics?",
        "label": "Future-Proofing",
        "answer": "<p>To prepare RPG II applications for integration with AI-driven analytics, start by modernizing the code to make it more compatible with modern analytics tools. This can be done by:\n* Converting RPG II code to more modern languages like RPG Free or Java\n* Using APIs to expose RPG II functionality to external systems\n* Integrating RPG II applications with data warehouses or lakes to provide a single source of truth for analytics\n* Implementing data governance and quality control processes to ensure accurate and reliable data\n* Using AI-driven tools to analyze and optimize RPG II code for better performance and maintainability.</p>",
        "QuestionText": "How do you prepare RPG II applications for integration with AI-driven analytics?"
    },
    {
        "num": 91,
        "title": "How do you reverse-engineer undocumented RPG II programs?",
        "label": "Reverse Engineering",
        "answer": "<p>To reverse-engineer undocumented RPG II programs, start by analyzing the program's structure and data flow. Identify the input and output files, as well as any record formats or data structures used. Use debugging tools to step through the code and understand the program's logic. Look for comments or other documentation that may have been left behind by the original programmer. If possible, consult with someone who is familiar with the program or the system it was written for. Use code analysis tools to help identify patterns and relationships in the code. Finally, create documentation as you go, rewriting the program in a more modern language or framework if necessary.</p>",
        "QuestionText": "How do you reverse-engineer undocumented RPG II programs?"
    },
    {
        "num": 92,
        "title": "What is the best approach for migrating an entire RPG II system to a new architecture?",
        "label": "System Migration",
        "answer": "<p>To migrate an entire RPG II system to a new architecture, a phased approach is recommended. Start by assessing the current system, identifying dependencies, and prioritizing components. Next, refactor the RPG II code to make it more modular and easier to maintain. Consider using modern programming languages like Java or Python, and migrate the data to a relational database. Use automated tools to convert RPG II code to the new language, and perform thorough testing to ensure the new system functions as expected. Finally, deploy the new system in a controlled environment, and provide training to end-users to ensure a smooth transition.</p>",
        "QuestionText": "What is the best approach for migrating an entire RPG II system to a new architecture?"
    },
    {
        "num": 93,
        "title": "How do you handle security vulnerabilities in legacy RPG II applications?",
        "label": "Security",
        "answer": "<p>To handle security vulnerabilities in legacy RPG II applications, identify and prioritize risks, then apply fixes or workarounds. Regularly review and update code, using tools like code analyzers to detect vulnerabilities. Implement secure coding practices, and consider migrating to newer platforms or languages for better support and security. Collaborate with security experts and stay informed about potential threats to ensure the application remains secure.</p>",
        "QuestionText": "How do you handle security vulnerabilities in legacy RPG II applications?"
    },
    {
        "num": 94,
        "title": "What are the risks and benefits of RPG II virtualization?",
        "label": "Virtualization",
        "answer": "<p>RPG II virtualization offers several benefits, including improved system flexibility, enhanced security, and increased productivity. However, it also carries some risks, such as potential performance degradation, compatibility issues with older systems, and the need for additional training and support. The benefits include:\n* Reduced hardware costs\n* Easier maintenance and updates\n* Improved scalability and flexibility\nThe risks include:\n* Potential performance degradation\n* Compatibility issues with older systems\n* Increased complexity and need for specialized skills\n* Dependence on virtualization software and hardware vendors.</p>",
        "QuestionText": "What are the risks and benefits of RPG II virtualization?"
    },
    {
        "num": 95,
        "title": "How can RPG II programs be optimized for sustainability and energy efficiency?",
        "label": "Performance Optimization",
        "answer": "<p>To optimize RPG II programs for sustainability and energy efficiency, focus on reducing CPU usage and improving code performance. This can be achieved by:\n* Using efficient data structures and algorithms\n* Minimizing database queries and I/O operations\n* Implementing modular programming techniques to reduce maintenance and updates\n* Leveraging compiler options and system settings to optimize program execution\n* Regularly reviewing and refactoring code to eliminate unnecessary computations and loops\nBy applying these strategies, RPG II programs can be made more energy-efficient, reducing the environmental impact of computing operations and contributing to a more sustainable IT infrastructure.</p>",
        "QuestionText": "How can RPG II programs be optimized for sustainability and energy efficiency?"
    },
    {
        "num": 96,
        "title": "What methods exist for automating RPG II development workflows?",
        "label": "Automation",
        "answer": "<p>To automate RPG II development workflows, several methods exist, including:\n* Using automated build tools such as Apache Ant or Maven\n* Implementing Continuous Integration/Continuous Deployment (CI/CD) pipelines using tools like Jenkins or GitLab CI/CD\n* Leveraging code analysis and formatting tools like RPG Formatter or RDi\n* Utilizing version control systems such as Git or SVN to manage code changes and collaborate with team members\n* Creating custom scripts using RPG or other programming languages to automate repetitive tasks\n* Using Integrated Development Environments (IDEs) like RDi or WDSC to streamline development processes.</p>",
        "QuestionText": "What methods exist for automating RPG II development workflows?"
    },
    {
        "num": 97,
        "title": "How do you extract business logic from RPG II for reuse in modern applications?",
        "label": "Legacy Maintenance",
        "answer": "<p>Extracting business logic from RPG II for reuse in modern applications involves several steps. First, identify the core business logic embedded in the RPG II code, separating it from presentation and infrastructure code. Next, refactor the extracted logic into modular, reusable components. This can be achieved by creating functions or procedures that encapsulate specific business rules. Consider using a service-oriented architecture to expose these components as services that can be consumed by modern applications. Additionally, utilize techniques like code translation or re-hosting to migrate the extracted logic to modern programming languages, ensuring compatibility and maintainability.</p>",
        "QuestionText": "How do you extract business logic from RPG II for reuse in modern applications?"
    },
    {
        "num": 98,
        "title": "What are the key differences between RPG II and newer RPG versions?",
        "label": "Modernization",
        "answer": "<p>RPG II and newer RPG versions have several key differences. \n* <strong>Syntax and Structure</strong>: RPG II uses a fixed-format syntax, while newer RPG versions use a free-format syntax, making it easier to write and read code.\n* <strong>Data Types and Operations</strong>: Newer RPG versions support more data types, such as arrays and data structures, and provide more advanced operations, including built-in functions for data manipulation and validation.\n* <strong>Database Access</strong>: Newer RPG versions provide improved database access capabilities, including support for SQL and embedded SQL.\n* <strong>Error Handling</strong>: Newer RPG versions have more advanced error handling capabilities, including support for exception handling and more detailed error messages.\n* <strong>Integration with Other Languages</strong>: Newer RPG versions can be integrated with other languages, such as Java and C++, making it easier to leverage the strengths of each language.</p>",
        "QuestionText": "What are the key differences between RPG II and newer RPG versions?"
    },
    {
        "num": 99,
        "title": "What are the biggest challenges facing organizations still using RPG II?",
        "label": "Industry Challenges",
        "answer": "<h3>Challenges with RPG II</h3>\n<ul>\n<li>Lack of skilled professionals: RPG II is an outdated language, and many experienced developers have moved to newer languages, making it difficult to find skilled professionals to maintain and update RPG II code.</li>\n<li>Limited functionality: RPG II lacks many modern programming features, making it challenging to develop and maintain complex applications.</li>\n<li>Integration issues: RPG II may not be compatible with newer systems, technologies, and software, making integration with other applications and systems difficult.</li>\n<li>Security concerns: Outdated languages like RPG II may have known security vulnerabilities, putting organizations' data and systems at risk.</li>\n<li>Maintenance and support: As RPG II is no longer supported by IBM, organizations may struggle to find resources and support to maintain and update their RPG II systems.</li>\n</ul>",
        "QuestionText": "What are the biggest challenges facing organizations still using RPG II?"
    },
    {
        "num": 100,
        "title": "How will RPG II's legacy impact future generations of enterprise software?",
        "label": "Industry Challenges",
        "answer": "<p>RPG II, a high-level programming language, has had a significant impact on the development of enterprise software. Its legacy can be seen in several areas, including the creation of subsequent RPG versions and the design of other programming languages. The structured programming approach and the concept of encapsulation of data and logic, introduced by RPG II, have influenced modern programming languages. As a result, future generations of enterprise software will likely build upon these concepts, making RPG II's legacy a lasting one. The continued use of RPG II in legacy systems also ensures its influence on the development and maintenance of these systems.</p>",
        "QuestionText": "How will RPG II's legacy impact future generations of enterprise software?"
    }
];

// Note: Entries 5-98 follow the same structure with formatted code blocks

// New content formatter with code highlighting
function formatAnswer(text) {
    // Convert markdown-style code blocks to HTML
    return text
        .replace(/```(\w+)?\n([^`]+)```/g, '<pre><code>$2</code></pre>')
        .replace(/`([^`]+)`/g, '<code>$1</code>')
        .replace(/\n/g, '<br>');
}

//Tag enhancer
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
// Updated post template
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
            <div class="post-body">${formatAnswer(post.answer)}</div>
            <div class="tags">
                <span class="tag">${post.label}</span>
                ${getAdditionalTags(post.label).map(t => `<span class="tag">#${t}</span>`).join('')}
            </div>
        </div>
    `;
}
// CSS Class for active filters
const activeFilterClass = 'filter-active';

// Track selected tags
//let selectedTags = new Set();
//let selectedTag = null;

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
        <button class="tag-filter ${selectedTag === tag ? activeFilterClass : ''}" 
                data-tag="${tag}">
            ${tag}
        </button>
    `).join('');

    // Add click handlers
    document.querySelectorAll('.tag-filter').forEach(button => {
        // Updated tag click handler (inside renderTagFilters)
button.addEventListener('click', () => {
    const tag = button.dataset.tag;
    
    if (selectedTag === tag) {
        selectedTag = null; // Deselect if same tag clicked
    } else {
        selectedTag = tag; // Select new tag
    }
    
    renderTagFilters(); // Re-render buttons
    filterPosts();
});
    });
}

// Filter posts based on selected tags
// Updated filterPosts
function filterPosts() {
    const filteredPosts = selectedTag 
        ? posts.filter(post => {
            const postTags = [
                post.label, 
                ...getAdditionalTags(post.label).map(t => `#${t}`)
            ];
            return postTags.some(tag => tag === selectedTag);
        })
        : posts;

    renderPosts(filteredPosts);
}

// Update renderPosts()
function renderPosts(postsToRender) {
    const container = document.getElementById('postsContainer');
    container.innerHTML = postsToRender
        .sort((a, b) => postDateMap.get(b.num) - postDateMap.get(a.num)) // New
        .map(post => createPostHTML(post))
        .join('');
}



// Modified initialization
document.addEventListener('DOMContentLoaded', () => {
    initializeDates();
    renderTagFilters();
    filterPosts();
});





