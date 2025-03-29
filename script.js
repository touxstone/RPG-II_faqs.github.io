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
        num: 1,
        title: "What is the purpose of the H specifications in RPG II?",
        label: "Program Structure",
        answer: `The H specifications in RPG II are used to define the header record of a report, controlling the layout and formatting of the report. They specify the page layout, including the page size, margins, and line spacing, as well as the printing of headings, footings, and detail lines.`
    },
    {
        num: 2,
        title: "How are comments written in RPG II?",
        label: "Syntax",
        answer: `In RPG II, comments are written by using the asterisk (*) symbol in column 7, also known as the indicator area, or by using the asterisk symbol followed by the comment text after the last line of code in the program, or by using the /FREE and /END-FREE statements for free-format comments.`
    },
    {
        num: 3,
        title: "What are the six main specification types in RPG II?",
        label: "Program Structure",
        answer: `The six main specification types in RPG II are: 
<pre><code>* Input specifications (F specs)
* Output specifications (F specs)
* Calculation specifications (C specs)
* Data description specifications (D specs)
* Processing specifications (H, F, D, C specs)
* Input/Output file information specifications (L specs)</code></pre>`
    },
    {
        num: 4,
        title: "How do you define a constant in RPG II?",
        label: "Constants",
        answer: `To define a constant in RPG II, you use the <code>/DEF</code> operation. For example: 
<pre><code>/DEF         N50             50</code></pre> 
This defines a named constant, <code>N50</code>, with a value of <code>50</code>.`
    },
    // Continuing with the same pattern for all 100 entries...
{
    num: 5,
    title: "What is the significance of the F specification in RPG II?",
    label: "File Handling",
    answer: `The F specification in RPG II is used to define file information, including file names, record formats, and input/output operations. It specifies how the program interacts with files, such as reading, writing, or updating records, and is essential for data processing and manipulation in RPG II programs.`
},
{
    num: 6,
    title: "How do you declare a numeric field in RPG II?",
    label: "Data Types",
    answer: `To declare a numeric field in RPG II:<br>
<pre><code>D FieldName         S              5P 0
D Salary           S              7P 2</code></pre>
The <code>P</code> indicates packed decimal format. <br>
To declare a numeric field in RPG II, you use the D specification type, followed by the field name, the data type (e.g., 5 0 for a 5-digit integer), and any additional parameters. For example: D FieldName         5 0`

},
{
    num: 7,
    title: "What is the default length of a packed decimal field in RPG II?",
    label: "Data Types",
    answer: `Default packed decimal declaration:<br>
<pre><code>D Price            S             15P 2</code></pre>
15 digits total with 2 decimal places.`
},
{
    num: 8,
    title: "How do you define an array in RPG II?",
    label: "Arrays",
    answer: `Array declaration example:<br>
<pre><code>D DailySales       S              5P 0 DIM(7)
D MonthTable       S             10A   DIM(12)</code></pre>`
},
{
    num: 9,
    title: "What is the role of indicators in RPG II?",
    label: "Control Flow",
    answer: `Indicators control program flow:<br>
<pre><code>C     *IN01        IFEQ '1'
C                   EXSR ErrorHandler
C                   END</code></pre>`
},
{
    num: 10,
    title: "How are character fields defined in RPG II?",
    label: "Data Types",
    answer: `Character field definition example:<br>
<pre><code>D CustomerName    S             25A
D Address         S             40A</code></pre>
The <code>A</code> indicates alphanumeric format.`
},
{
    num: 11,
    title: "How do you define an input file in the F specification?",
    label: "File Handling",
    answer: `Input file definition:<br>
<pre><code>FCUSTOMER   IF   E           DISK
F                                     USROPN</code></pre>`
},
{
    num: 12,
    title: "What does the 'DISK' keyword indicate in the F specification?",
    label: "File Handling",
    answer: `The DISK keyword specifies physical file storage:<br>
<pre><code>FORDERFILE  UF   E           DISK</code></pre>`
},
{
 num: 13,
 title: "How can you read a record from a file in RPG II?",
 label: "File Handling",
 answer: `Basic file read operation:<br>
<pre><code>C     READ CustMast
C                   DOW NOT %EOF
C                   EXSR ProcessRecord
C                   READ CustMast
C                   ENDDO</code></pre>`
 },
{
    num: 14,
    title: "What is the purpose of the READ operation in RPG II?",
    label: "File Handling",
    answer: `Basic READ operation:<br>
<pre><code>C     READ OrderFile
C                   DOW NOT %EOF
C                   EXSR ProcessOrder
C                   READ OrderFile
C                   ENDDO</code></pre>`
},
{
    num: 15,
    title: "How do you update a record in an RPG II file?",
    label: "File Handling",
    answer: `Record update process:<br>
<pre><code>C     CHAIN(EmpID) Employee
C                   IF %FOUND
C                   EVAL Salary = NewSalary
C                   UPDATE Employee
C                   ENDIF</code></pre>`
},
{
    num: 16,
    title: "How do you perform addition in RPG II?",
    label: "Arithmetic Operations",
    answer: `Addition example:<br>
<pre><code>C                   ADD Amt1 Amt2       Total
C                   ADD 1:2:3           Count</code></pre>`
},
{
    num: 17,
    title: "What does the MULT operation do in RPG II?",
    label: "Arithmetic Operations",
    answer: `Multiplication example:<br>
<pre><code>C     HoursWorked  MULT   PayRate      GrossPay
C                   Z-ADD GrossPay     TotalPay</code></pre>`
},
{
    num: 18,
    title: "How can you compare two numeric values in RPG II?",
    label: "Comparison Operators",
    answer: `Comparison operations:<br>
<pre><code>C     AmtDue      COMP   CreditLimit   70
C                   IFGT
C                   EXSR Overlimit
C                   ENDIF</code></pre>`
},  
{
 num: 19,
 title: "What RPG II operation is used to branch based on a condition?",
 label: "Control Flow",
 answer: `Conditional branching:<br>
<pre><code>C     Amt1         COMP Amt2            80
C                   IFGT                TotalCalc
C                   ELSE                OtherCalc
C                   END</code></pre>`
 },
{
    num: 20,
    title: "How do you define a calculation in the C specification?",
    label: "Calculations",
    answer: `Calculation specification example:<br>
<pre><code>C     AmtSold      MULT   Quantity     TotalSale
C                   ADD    TotalSale    GrandTotal</code></pre>`
},
{
    num: 21,
    title: "How do you use an indicator to conditionally execute a calculation?",
    label: "Control Flow",
    answer: `Indicator-controlled calculation:<br>
<pre><code>C     *IN01        IFEQ '1'
C                   ADD    Bonus        Salary
C                   ENDIF</code></pre>`
},
{
    num: 22,
    title: "What is a level break in RPG II?",
    label: "Control Flow",
    answer: `Level break processing:<br>
<pre><code>C     Customer    SETLL SalesFile
C                   READ SalesFile
C                   DOW NOT %EOF
C                   IFLL *LOVAL Customer
C                   EXSR NewCustomer
C                   ENDIF
C                   READ SalesFile
C                   ENDDO</code></pre>`
},
{
    num: 23,
    title: "How does RPG II handle loops?",
    label: "Loops", 
    answer: `DOW loop example:<br>
<pre><code>C                   DOW Count < 10
C                   ADD 1           Count
C                   ENDDO</code></pre>`
},
{
    num: 24,
    title: "What is the purpose of the GOTO operation?",
    label: "Control Flow",
    answer: `GOTO usage:<br>
<pre><code>C                   GOTO ProcessOrder
C     Validate     TAG
C                   ...</code></pre>`
},
{
    num: 25,
    title: "How do you use an indicator to control program flow?",
    label: "Control Flow",
    answer: `Indicator-based flow:<br>
<pre><code>C     *IN70       IFEQ '1'
C                   EXSR SpecialCase
C                   ENDIF</code></pre>`
},  
{
 num: 26,
 title: "What is an externally described file in RPG II?",
 label: "File Handling",
 answer: `External file definition:<br>
<pre><code>FEMPMAST    IF   E           DISK
F                                     EXTFILE(EMPLOYEE)</code></pre>`
 },
{
    num: 27,
    title: "How can you call an external program from RPG II?",
    label: "Program Calls",
    answer: `Calling external programs:<br>
<pre><code>C                   CALL 'PAYROLL'
C                   PARM           EmployeeID
C                   PARM           HoursWorked</code></pre>`
},
{
    num: 28,
    title: "How do you handle errors in RPG II?",
    label: "Debugging",
    answer: `Error handling with indicators:<br>
<pre><code>C     READ FileA
C                   IF *IN99
C                   EXSR ErrorHandler
C                   ENDIF</code></pre>`
},
{
    num: 29,
    title: "What is the difference between a primary and secondary file?",
    label: "File Handling",
    answer: `File specifications:<br>
<pre><code>FMASTER     IP   E           DISK    // Primary
FLOOKUP     IS   E           DISK    // Secondary</code></pre>`
},
{
    num: 30,
    title: "How do you define a multi-record format file?",
    label: "File Handling",
    answer: `Multiple record formats:<br>
<pre><code>FCUSTMAST   IF   E           DISK
RCREDIT                 80
RCASH                   60</code></pre>`
},
{
    num: 31,
    title: "How do you handle indexed files in RPG II?",
    label: "File Handling",
    answer: `Indexed file access:<br>
<pre><code>C     EMPID       CHAIN    EMPMAST
C                   IF %FOUND(EMPMAST)
C                   EXSR ProcessEmployee
C                   ENDIF</code></pre>`
},
{
    num: 32,
    title: "Significance of primary vs secondary files",
    label: "File Handling",
    answer: `File declarations:<br>
<pre><code>FORDERS     IP   E           DISK    // Primary
FCUSTOMER   IS   E           DISK    // Secondary</code></pre>`
},
{
    num: 33,
    title: "Process multiple record formats",
    label: "File Handling",
    answer: `Multiple format handling:<br>
<pre><code>READ FILEA;
SELECT;
WHEN %RECORD = 'HEADER';
  EXSR ProcessHeader;
WHEN %RECORD = 'DETAIL';
  EXSR ProcessDetail;
ENDSEL;</code></pre>`
},
{
    num: 34,
    title: "Key considerations for sequential files",
    label: "File Handling",
    answer: `Sequential processing:<br>
<pre><code>C     SETLL      *START     SEQFILE
C     READ       SEQFILE
C                   DOW NOT %EOF
C                   EXSR ProcessRecord
C                   READ SEQFILE
C                   ENDDO</code></pre>`
},  
{
 num: 35,
 title: "How can you efficiently read and write from multiple files in RPG II?",
 label: "File Handling",
 answer: `Multi-file processing:<br>
<pre><code>FCustMast    IF   E           DISK
FTransact    UF   A          DISK

C     READ CustMast
C     READ Transact
C                   DOW NOT %EOF(CustMast) AND NOT %EOF(Transact)
C     ...</code></pre>`
 },
  {
    num: 36,
    title: "What challenges arise when modifying legacy RPG II programs?",
    label: "Legacy Maintenance",
    answer: `Common challenges:<br>
- Outdated fixed-format syntax
- Lack of modularization
- Tight coupling with physical files
- Limited documentation
- Obsolete coding practices`
},
{
    num: 37,
    title: "Add features without breaking logic",
    label: "Legacy Maintenance",
    answer: `Safe modification pattern:<br>
<pre><code>** Original Code **
C     MOVE A             B

** Modified Code **
C     IF FeatureFlag = '1'
C                   EXSR NewLogic
C                   ELSE
C                   MOVE A           B
C                   ENDIF</code></pre>`
},
  {
   num: 38,
   title: "What debugging techniques are available for RPG II on older hardware?",
   label: "Debugging",
   answer: `Using debug mode:<br>
<pre><code>H DEBUG(*YES)

C     DUMP
C                   DSPLY 'Variable Value: ' WVariable</code></pre>`
   },
  {
    num: 39,
    title: "How do you track changes in legacy codebases?",
    label: "Legacy Maintenance", 
    answer: `Change tracking example:<br>
<pre><code>** Version 1.2 - 2024-11-15 **
* Added customer discount logic
* Modified order validation routine</code></pre>`
},
  {
    num: 40,
    title: "Managing technical debt",
    label: "Legacy Maintenance",
    answer: `Technical debt register:<br>
1. Complex payment calc (CR-2024-001)
2. Hardcoded tax rates (CR-2024-002)
3. Fragile file locking (CR-2024-003)`
},
{
    num: 41,
    title: "Optimize file processing",
    label: "Performance Optimization",
    answer: `Set low values for efficiency:<br>
<pre><code>C     SETLL      *LOVAL     MASTER
C     READ       MASTER
C                   DOW NOT %EOF</code></pre>`
},
  {
    num: 42,
    title: "Mitigate excessive disk I/O impact",
    label: "Performance Optimization",
    answer: `Batch processing pattern:<br>
<pre><code>C     SETLL      *START     MASTER
C     READ       MASTER
C                   DOW NOT %EOF
C                   WRITE DETAIL
C                   READ MASTER
C                   ENDDO</code></pre>`
},
{
    num: 43,
    title: "Efficient large dataset iteration",
    label: "Performance Optimization",
    answer: `Block processing example:<br>
<pre><code>C     READBLK    FILEA             100
C                   DOW NOT %EOF
C                   EXSR ProcessBlock
C                   READBLK FILEA   100
C                   ENDDO</code></pre>`
},
{
    num: 44,
    title: "Optimize numeric calculations",
    label: "Performance Optimization", 
    answer: `Packed decimal optimization:<br>
<pre><code>D Total        S             11P 2
D Factor       S              5P 4
C                   MULT(H) Total Factor     Result</code></pre>`
},
{
    num: 45,
    title: "Inefficient coding practices to avoid",
    label: "Performance Optimization",
    answer: `Anti-pattern examples:<br>
1. Unnecessary file opens/closes in loops<br>
2. Overuse of indicators for simple logic<br>
3. Lack of proper indexing on key fields`
},
{
    num: 46,
    title: "Migrate to modern RPG versions",
    label: "Modernization",
    answer: `Migration steps:<br>
<pre><code>1. Analyze existing codebase
2. Convert fixed-format to free-format
3. Replace cycle-based logic
4. Implement service programs
5. Add exception handling</code></pre>`
},
  
{
 num: 47,
 title: "How can RPG II interact with relational databases like DB2?",
 label: "Modernization",
 answer: `Embedded SQL example:<br>
<pre><code>C/EXEC SQL
C+ DECLARE C1 CURSOR FOR
C+ SELECT * FROM CUSTOMERS
C/END-EXEC</code></pre>`
 },
{
    num: 48,
    title: "Challenges of integrating with web apps",
    label: "Modernization",
    answer: `Web service integration:<br>
<pre><code>C/EXEC SQL
C+ CALL WEB_SERVICE(
C+ :InputData,
C+ :OutputData)
C/END-EXEC</code></pre>`
},
  {
    num: 49,
    title: "Connect RPG II with modern APIs",
    label: "Modernization",
    answer: `HTTP API call pattern:<br>
<pre><code>C     POST       /api/orders
C     CONTENT    application/json
C     DATA       {'order': 1234}
C     RESPONSE   HTTPCODE</code></pre>`
},
{
    num: 50,
    title: "Risks/Benefits of rewriting systems",
    label: "Modernization",
    answer: `Cost-benefit analysis:<br>
<pre><code>+-----------------+---------------------+
| Benefits        | Risks               |
+-----------------+---------------------+
| Modern features | High initial cost   |
| Better perf     | Data migration risks|
| Easier maint    | Staff retraining    |
+-----------------+---------------------+</code></pre>`
},
{
    num: 51,
    title: "RPG/COBOL communication",
    label: "Interfacing with Other Languages",
    answer: `Parameter passing example:<br>
<pre><code>C     CALL      'COBOLPROG'
C               PARM           RPGDATA
C               PARM           COBRESULT</code></pre>`
},
{
    num: 52,
    title: "CL role in job execution",
    label: "Interfacing with Other Languages",
    answer: `CL script example:<br>
<pre><code>PGM
DLTF FILE(QTEMP/OUTPUT)
CALL RPGPROG PARM(&INPUT)
MONMSG MSGID(CPF0000) EXEC(EXSR ERROR)
ENDPGM</code></pre>`
},  
{
 num: 53,
 title: "How can SQL be embedded in an RPG II program?",
 label: "Interfacing with Other Languages",
 answer: `SQL in RPG II:<br>
<pre><code>C/EXEC SQL
C+ UPDATE EMPLOYEE
C+ SET SALARY = :NewSalary
C+ WHERE EMPID = :EmployeeID
C/END-EXEC</code></pre>`
 },
{
    num: 54,
    title: "Integrating RPG II with Java",
    label: "Interfacing with Other Languages",
    answer: `Java Native Interface (JNI):<br>
<pre><code>// Java wrapper class
public class RPGIIBridge {
    native void callRPGProgram(byte[] data);
}</code></pre>`
},
  {
    num: 55,
    title: "Exchange data with ERP systems",
    label: "Interfacing with Other Languages",
    answer: `XML export example:<br>
<pre><code>EXPORT TO XML FILE(ERPEXP) 
FROM(ERPDATA);</code></pre>`
},
{
    num: 56,
    title: "AS/400 debugging tools",
    label: "Debugging",
    answer: `Debug session setup:<br>
<pre><code>STRDBG PGMMYPROG
ADDBKP *PGM 12345
ADDBKP *PGM 23456</code></pre>`
},
{
    num: 57,
    title: "Trace intermittent batch errors",
    label: "Debugging",
    answer: `Job log analysis pattern:<br>
1. Check job number<br>
2. DSPLOG OUTPUT(*PRINT)<br>
3. Filter for CPF messages<br>
4. Cross-reference with program sources`
},
{
    num: 58,
    title: "Prevent infinite loops",
    label: "Debugging",
    answer: `Loop safety pattern:<br>
<pre><code>C     Z-ADD     0             LoopCount
C                   DOW LoopCount < 100
C                   ADD 1       LoopCount
C                   ...
C                   ENDDO</code></pre>`
},
{
    num: 59,
    title: "Interpret error messages",
    label: "Debugging",
    answer: `Common error codes:<br>
- MCH0001: Object not found<br>
- CPF4131: File in use<br>
- RNQ0120: Decimal data error`
},
{
    num: 60,
    title: "Test RPG II programs",
    label: "Debugging",
    answer: `Test case structure:<br>
<pre><code>** Test Case TC-001 **
- Input: ValidOrder = 'Y'
- Expected: ProcessOrder called
- Actual: Verified in debug session</code></pre>`
},  
{
 num: 61,
 title: "How do you implement a table lookup in RPG II?",
 label: "Control Flow",
 answer: `Table lookup example:<br>
<pre><code>D States         S             20A   DIM(50)
C     StateCode    LOOKUP States
C                   IFEQ *FOUND
C                   MOVE StateName    Result
C                   END</code></pre>`
 },
{
    num: 62,
    title: "Best practices for nested conditionals",
    label: "Control Flow",
    answer: `Structured approach:<br>
<pre><code>C     IF Condition1
C                   IF Condition2
C                   EXSR ProcessBoth
C                   ELSE
C                   EXSR ProcessFirst
C                   ENDIF
C                   ELSE
C                   EXSR ProcessOther
C                   ENDIF</code></pre>`
},
{
    num: 63,
    title: "Handle unexpected values",
    label: "Control Flow",
    answer: `Validation routine:<br>
<pre><code>C     TEST(E)    QTYORDERED         70
C                   IF *IN70
C                   EXSR InvalidQty
C                   ENDIF</code></pre>`
},
 {
    num: 64,
    title: "Indicators in program logic",
    label: "Control Flow",
    answer: `Indicator matrix:<br>
<pre><code>Indicator | Purpose
*IN01     | Override processing
*IN99     | Error condition
*IN70     | Validation flag</code></pre>`
},
{
    num: 65,
    title: "Implement error-handling routines",
    label: "Control Flow",
    answer: `Error handler structure:<br>
<pre><code>C     *IN99     IFEQ '1'
C                   EXSR LogError
C                   EXSR SendAlert
C                   ENDIF</code></pre>`
},
{
    num: 66,
    title: "Merge data from multiple files",
    label: "File Handling",
    answer: `File merge pattern:<br>
<pre><code>C     READ FILEA
C     READ FILEB
C                   DOW NOT %EOF(FILEA) AND NOT %EOF(FILEB)
C                   COMP KEYA KEYB
C                   SELECT
C                   WHEN KEYA < KEYB
C                   READ FILEA
C                   WHEN KEYA > KEYB
C                   READ FILEB
C                   OTHER
C                   EXSR MatchProcess
C                   ENDSL
C                   ENDDO</code></pre>`
}, 
{
 num: 67,
 title: "What techniques are available for sorting records in RPG II?",
 label: "File Handling",
 answer: `Sorting with SORTA:<br>
<pre><code>C                   SORTA MyArray
C                   SETLL *START       MyFile
C                   READ MyFile</code></pre>`
 },
{
    num: 68,
    title: "Managing concurrent file access",
    label: "File Handling",
    answer: `Locking example:<br>
<pre><code>C     CHAIN(N) Customer
C                   IF %FOUND
C                   LOCK Customer
C                   UPDATE Customer
C                   UNLOCK Customer
C                   ENDIF</code></pre>`
},
{
    num: 69,
    title: "Purpose of EXFMT operation",
    label: "File Handling",
    answer: `EXFMT usage:<br>
<pre><code>EXFMT SCREEN1;
IF *IN03;
  EXSR ProcessInput;
ENDIF;</code></pre>`
},
{
    num: 70,
    title: "Dynamic record selection",
    label: "File Handling",
    answer: `Dynamic read example:<br>
<pre><code>C     EVAL      %KDS(OrderKey) = UserInput
C     CHAIN     OrderKey ORDERS</code></pre>`
},
{
    num: 71,
    title: "Risks of large system changes",
    label: "Large-Scale Systems",
    answer: `Change management checklist:<br>
1. Impact analysis<br>
2. Fallback plan<br>
3. Phased rollout<br>
4. User training`
},
{
    num: 72,
    title: "Modularize RPG programs",
    label: "Large-Scale Systems",
    answer: `Service program structure:<br>
<pre><code>** SRVPGM - CALCUTIL **
- CalculateTax()
- ValidateOrder()
- FormatCurrency()</code></pre>`
},
{
    num: 73,
    title: "Integrate with reporting tools",
    label: "Large-Scale Systems",
    answer: `CSV export pattern:<br>
<pre><code>EXPORT TO CSV FILE(REPORT) 
FROM(DATAARA) 
FLDSEP('|');</code></pre>`
},  
{
 num: 74,
 title: "How do you ensure data integrity in high-volume RPG II applications?",
 label: "Large-Scale Systems",
 answer: `Commitment control example:<br>
<pre><code>C                   COMMIT
C                   ROLBK</code></pre>`
 },
{
    num: 75,
    title: "Batch processing optimization",
    label: "Large-Scale Systems",
    answer: `Batch job setup:<br>
<pre><code>SBMJOB CMD(CALL RPGPROG) JOBD(QGPL/QBATCH)</code></pre>`
},
{
    num: 76,
    title: "RPG II in financial apps",
    label: "Industry-Specific Applications",
    answer: `Interest calculation:<br>
<pre><code>C     Principal  MULT   Rate         Interest
C                   ADD    Interest    TotalDue</code></pre>`
},
 {
    num: 77,
    title: "Manufacturing use cases",
    label: "Industry-Specific Applications",
    answer: `Production tracking:<br>
<pre><code>C     READ      SHIFT_DATA
C                   IF %FOUND
C                   EXSR UpdateProduction
C                   ENDIF</code></pre>`
},
{
    num: 78,
    title: "Inventory management support",
    label: "Industry-Specific Applications",
    answer: `Stock level check:<br>
<pre><code>C     PARTNO     CHAIN    INVENTORY
C                   IF %FOUND
C                   COMP QTYONHAND REORDERLVL
C                   IFLL
C                   EXSR GeneratePO
C                   ENDIF</code></pre>`
},
{
    num: 79,
    title: "Retail system limitations",
    label: "Industry-Specific Applications",
    answer: `Modern retail challenges:<br>
- No native web service support<br>
- Limited mobile integration<br>
- Real-time inventory sync issues`
},
{
    num: 80,
    title: "Healthcare integration",
    label: "Industry-Specific Applications",
    answer: `Patient data handling:<br>
<pre><code>FPTRECS     UF   E           DISK
F                                     RENAME(PATID:PTID)</code></pre>`
},
{
    num: 81,
    title: "Long-term maintenance strategies",
    label: "Future-Proofing",
    answer: `Maintenance roadmap:<br>
1. Annual code audits<br>
2. Tech debt prioritization<br>
3. Staff cross-training<br>
4. Documentation updates`
}, 
{
 num: 82,
 title: "How can you transition from RPG II to cloud-based architectures?",
 label: "Future-Proofing",
 answer: `Wrapper program example:<br>
<pre><code>DCL-PR CloudService EXTPGM('CLOUDSVC');
  InputData    LIKE(MyStruct);
END-PR;</code></pre>`
 },
{
    num: 83,
    title: "Modernization tools for RPG II",
    label: "Future-Proofing",
    answer: `Toolchain example:<br>
- ARCAD CodeChecker
- IBM Rational Developer
- Profound Logic Studio
- ASNA Visual RPG`
},
{
    num: 84,
    title: "Document RPG II systems",
    label: "Future-Proofing",
    answer: `Documentation standards:<br>
- Code headers with change history<br>
- Data dictionary<br>
- Process flow diagrams<br>
- Interface specifications`
},
{
    num: 85,
    title: "Hybrid system benefits",
    label: "Future-Proofing",
    answer: `Hybrid architecture:<br>
<pre><code>[Legacy RPG II] <-> [API Gateway] <-> [Cloud Services]</code></pre>`
},
{
    num: 86,
    title: "System retirement considerations",
    label: "Retirement Strategies",
    answer: `Decommission checklist:<br>
1. Data archival plan<br>
2. Dependency mapping<br>
3. Legal/compliance review<br>
4. Final backup verification`
},
{
    num: 87,
    title: "Ensure backward compatibility",
    label: "Retirement Strategies",
    answer: `Versioning strategy:<br>
<pre><code>VERSION 1.2.3
- Add: New tax calc
- Keep: Legacy order format
- Deprecate: Old report code</code></pre>`
},
{
    num: 88,
    title: "Legal compliance risks",
    label: "Retirement Strategies",
    answer: `Risk assessment factors:<br>
- Data privacy regulations (GDPR)<br>
- Financial reporting standards<br>
- Audit trail requirements`
},
{
    num: 89,
    title: "AI in system analysis",
    label: "Future-Proofing",
    answer: `AI-powered analysis:<br>
- Code complexity scoring<br>
- Dependency mapping<br>
- Automated test generation`
},
{
    num: 90,
    title: "Prepare for AI analytics",
    label: "Future-Proofing",
    answer: `Data preparation steps:<br>
1. Clean historical data<br>
2. Standardize formats<br>
3. Implement API endpoints<br>
4. Add usage tracking`
},
{
    num: 91,
    title: "Reverse engineer RPG programs",
    label: "Reverse Engineering",
    answer: `Process flow:<br>
1. Generate cross-reference reports<br>
2. Map file dependencies<br>
3. Document indicator usage<br>
4. Rebuild logic diagrams`
},
{
    num: 92,
    title: "Full system migration",
    label: "System Migration",
    answer: `Migration phases:<br>
<pre><code>Phase 1: Lift-and-shift to IaaS
Phase 2: Refactor to microservices
Phase 3: Implement cloud-native features</code></pre>`
},  
{
 num: 93,
 title: "How do you handle security vulnerabilities in legacy RPG II applications?",
 label: "Security",
 answer: `Input validation example:<br>
<pre><code>C     UserInput    TEST(DE)                  99
C                   IFEQ *INVALID
C                   EXSR RejectInput
C                   END</code></pre>`
 },
{
    num: 94,
    title: "Risks and benefits of virtualization",
    label: "Virtualization",
    answer: `IBM i virtualization:<br>
<pre><code>CRTDEVASP NAME(RPGENV) TYPE(*VIRTUAL)
ADDRPYLE SEQNBR(100) ASPDEV(RPGENV)</code></pre>`
},
{
    num: 95,
    title: "Optimize for sustainability",
    label: "Performance Optimization",
    answer: `CPU reduction techniques:<br>
<pre><code>** Before **
DOW 1 = 1;

** After **
DOW (Count < Max) AND (Timeout = 0);</code></pre>`
},
{
    num: 96,
    title: "Automate development workflows",
    label: "Automation",
    answer: `CI/CD pipeline example:<br>
<pre><code>stages:
  - compile
  - test
  - deploy

compile_rpg:
  script: rpgcompiler -src=*.rpgle</code></pre>`
},
{
    num: 97,
    title: "How do you extract business logic from RPG II for reuse in modern applications?",
    label: "Legacy Maintenance",
    answer: `Extraction strategy:<br>
<pre><code>** Original RPG II Logic **
C     CustBal      COMP   CreditLimit   70
C                   IFGT
C                   EXSR DenyOrder
C                   ENDIF

** Modern Service Wrapper **
/free
   if checkCreditLimit(custNo, orderAmt);
      denyOrder();
   endif;
/end-free</code></pre>`
},  
{
 num: 98,
 title: "What are the key differences between RPG II and newer RPG versions?",
 label: "Modernization",
 answer: `Modern RPG features:<br>
<pre><code>// Free-format RPG
/free
   if CustomerBalance > CreditLimit;
      exsr SendAlert;
   endif;
/end-free</code></pre>`
 },
    {
        num: 99,
        title: "What are the biggest challenges facing organizations still using RPG II?",
        label: "Industry Challenges",
        answer: `### Challenges with RPG II
* Lack of skilled professionals
* Limited functionality
* Integration issues
* Security concerns
* Maintenance and support`
    },
    {
        num: 100,
        title: "How will RPG II's legacy impact future generations of enterprise software?",
        label: "Industry Challenges",
        answer: `RPG II's legacy can be seen in several areas:
<pre><code>* Structured programming approach
* Encapsulation concepts
* Influence on modern languages
* Continued use in legacy systems</code></pre>
Future enterprise software will build upon these foundational concepts.`
    },
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





