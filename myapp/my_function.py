
import pyodbc 
import nltk
import json
import re 
def db(ele):
   
    server = 'LAPTOP-LFH0VJ0R'  # Replace with your server name
    database = 'vp1'  # Replace with your database name
    #username = 'LAPTOP-LFH0VJ0R\Admin(52)'  # Replace with your username
    #password = 'rajathn14'  # Replace with your password
    #windows authentication so  no need
    cnxn = pyodbc.connect('DRIVER={SQL Server};SERVER='+server+';DATABASE='+database)
    preprocessed_arr=my_function(ele)

    results = []
    json_data=""
    cursor = cnxn.cursor()
    for i in preprocessed_arr:
        
        sn = i
        pat = '%'
        sn = pat + sn + pat

    #used placeholder
    # Execute a SELECT query to retrieve data from the database
        query = "SELECT * FROM entries WHERE identifier like ?;"
        params = (sn,)
        cursor.execute(query, params)

    # Convert the rows to dictionaries
        columns = [column[0] for column in cursor.description]
    
        for row in cursor.fetchall():
            results.append(dict(zip(columns, row)))
    
        if results:
            json_data = json.dumps(results)
            

    # Close the cursor and connection to release resources
    cursor.close()

    return json_data






def my_function(s):
    # do something with the text here
    # cleaning
    
# module for matching regular expressions
    

    s=re.sub(r'[^\w\s]','',s)
# this code for to allow only space and words (whichever is not a word or space characater replace it with '')



#tokenization 
#alternate use split

#this is standard
    
    nltk.download('punkt')
    nltk.download('wordnet')

    tokens=nltk.word_tokenize(s)


#removing unwanted words

    from nltk.corpus import stopwords
    from nltk.tokenize import word_tokenize
    nltk.download('stopwords')
  

  
    stop_words = set(stopwords.words('english'))
  

# converts the words in word_tokens to lower case and then checks whether 
#they are present in stop_words or not
# geeks code needs improvement tommorow discussion
    filtered_sentence = [w for w in tokens if not w.lower() in stop_words]
#with no lower case conversion
    filtered_sentence = []
  
    for w in tokens:
        if w not in stop_words:
            filtered_sentence.append(w)
  

#stemming we will not use


# lemmatization 

    from nltk.stem import WordNetLemmatizer
  
    lemmatizer = WordNetLemmatizer()


    lemma=[]


    for i in range(len(filtered_sentence)):
        lemma.append(lemmatizer.lemmatize(filtered_sentence[i],'v'))

    
    
    return lemma
                
  
    







